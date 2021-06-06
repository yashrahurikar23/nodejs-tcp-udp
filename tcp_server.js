const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Connection established');
});

server.on('connection', (connection) => {
  const clientAddress = `${connection.remoteAddress}: ${connection.remotePort}`;
  console.log(`New client connected from ${clientAddress}`);

  connection.setEncoding('utf-8');
  
  connection.on('data', (data) => {
    console.log(`Data from ${clientAddress}: ${data}`);
    connection.write(data);
  });

  connection.once('close', () => {
    console.log(`Connection closed for ${clientAddress}`);
  })

  connection.on('error', () => {
    console.log(`Error for connection ${clientAddress}`);
  })
});

server.listen(9000, () => {
  console.log(`server listening on 9000`);
});

