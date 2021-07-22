require('dotenv').config();
const express = require('express');
const session = require('express-session');
const hymns = require("./mocks/hymns.json");
const path = require('path');

const app = express();

const { PORT } = process.env;

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(express.json());
app.use(express.static(path.resolve(__dirname + '/react-ui/build')));

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

// catch-all so react can handle routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}`);
});