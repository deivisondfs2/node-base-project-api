/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import debug from 'debug';
import app from './src/app';

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

app.listen(port, () => {
  process.stdout.write(`Point your browser to: http://localhost:${port}\n`);
});

// var server = http.createServer(app);
// server.listen(port, () => {
//   process.stdout.write(`Point your browser to: http://localhost:${port}\n`);
// });
// server.on("error", onError);
// server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  // eslint-disable-next-line no-undef
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}
