require('dotenv').config();
const ensureAuthenticated = require('./middleware/ensureAuthenticated');
const express = require('express');
const session = require('express-session');
const hymns = require('./mocks/hymns.json');
const passport = require('passport');
const path = require('path');
const sacramentMeeting = require('./mocks/sacrament_meeting.json');

const app = express();

process.env.HTTPS = true

const { PORT } = process.env;

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname + '/react-ui/build')));

app.use(passport.initialize());
app.use(passport.session())

app.get('/heartbeat', (req, res) => {
  res.json({
    "is": "working"
  })
});

app.get('/hymns', (req, res) => {
  let number;
  let title;
  let found;
  if(req.query.title) {
    found = hymns.filter(hymn => hymn.title.toLowerCase().indexOf(req.query.title.toLowerCase()) > -1);
  } else if(req.query.hymn) {
    found = hymns.filter(hymn => hymn.hymnNo === req.query.hymn)[0];
  } else {
    found = hymns;
  }
  res.json(found);
});

app.get('/api/sacrament_meeting', ensureAuthenticated, (req, res) => {
  res.json(sacramentMeeting);
})


// routes
const { fbAuth, ghAuth } = require('./routes/auth');
app.use('/auth/facebook', fbAuth);
app.use('/auth/github', ghAuth);


// check login status
app.get('/status', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      "isAuthenticated": true
    })
  } else {
    res.redirect('/login');
  }
});


// catch-all so react can handle routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}`);
});