const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('listening', () => {
  const address = server.address();
  console.log(`Server listening on port ${address.address}: ${address.port}`);
});

server.on('message', (msg, rinfo) => {
  console.log(`Message received: ${msg} with info ${rinfo}`);
});

server.on('error', (error) => {
  console.log(`Server error: ${error.stack}`);
});

server.bind(9001);