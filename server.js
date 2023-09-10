require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const session = require('express-session');
const { getTotals } = require('./utils');

const server = express();

const { PORT, SECRET } = process.env;

const views = [];

const sessionConfig = {
  cookie: {
    secure: false,  // allow requests over http; if true, allow only over https
    maxAge: 86400 * 365  // set cookie expiration for one year
  },
  resave: false,  // update the session even when there are no changes
  saveUninitialized: true,  // always create a session
  secret: SECRET  // a unique value that signs the cookie
};

server.use(cookieParser())
server.use(session(sessionConfig));
server.use(express.json());
server.use(express.static(path.resolve(`${__dirname}/react-ui/build`)));

server.get('/heartbeat', (req, res) => {
  res.json({
    "is": "working"
  })
});

server.get('/views', (req, res) => {
  const { totalCount, totalSessionIds } = getTotals(views);
  res.json({
    totalCount,
    totalSessionIds,
    views
  })
});

server.get('/check-in', (req, res) => {
  const { id } = req.session;

  if (!views.length) {
    views.push({
      count: 1,
      id
    });
  } else {
    views.forEach(view => {
      // if the IDs match
      if (view.id === id) {
        view.count += 1;
      }
      // if the IDs do not match
      if (!views.some(x => x.id === id)) {
        views.push({
          count: 1,
          id
        })
      }
    });
  }
  res.json({
    message: "Thank you for checking in!"
  })
});

// delegate client-side routing to the client
server.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/react-ui/build/index.html)`));
});

server.listen(process.env.PORT || PORT, () => {
  console.log(`The server is listening at port ${PORT}`);
});
