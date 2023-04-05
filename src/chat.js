import { createServer, createConnection } from 'net';
import { createInterface } from 'readline';
import print from './utils/colorizer.js';

function TCPServer() {
  const users = new Set();
  this.server = createServer((socket) => {
    users.add(socket);

    users.forEach((user) => {
      if (user !== socket) {
        user.write(`${socket.remoteAddress}:${socket.remotePort} connected\n`);
      }
    });

    socket.on('data', (data) => {
      users.forEach((user) => {
        if (user !== socket) {
          user.write(`${socket.remoteAddress}:${socket.remotePort} > ${data}\n`);
        }
      });
    });

    socket.on('end', () => {
      users.delete(socket);

      users.forEach((user) => {
        if (user !== socket) {
          user.write(`${socket.remoteAddress}:${socket.remotePort} left\n`);
        }
      });
    });
  });
  this.server.listen(8000, () => {
    print('#c[TCP chat is created on port 8000]');
  });
}

function TCPClient() {
  this.client = createConnection({ port: 8000 }, () => {
    print('#c[Connected to TCP chat on port 8000]');
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.on('line', (input) => {
      this.client.write(input);
    });
  });

  this.client.on('data', (data) => {
    print(data.toString());
  });
  this.client.on('close', () => {
    print('#c[Connection closed]');
  });
}

export { TCPServer, TCPClient };
