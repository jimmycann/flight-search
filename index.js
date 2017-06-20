'use strict';

const Composer = require('./config/composer');

Composer((err, server) => {
  if (err) { throw err; }

  server.start(err => {
    if (err) { throw err; }

    console.log(`✅  Server is listening at localhost:${server.info.port}`);
  });
});
