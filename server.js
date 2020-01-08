//demo from https://javascript.info/article/websocket/demo/server.js

const http = require('http');
const ws = require('ws');

const wss = new ws.Server({noServer: true});
const WebSocket = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3
}


function accept(req, res) {
  // all incoming requests must be websockets
  if (!req.headers.upgrade || req.headers.upgrade.toLowerCase() != 'websocket') {
    res.end();
    return;
  }
  console.log("Received a request");
  // can be Connection: keep-alive, Upgrade
  if (!req.headers.connection.match(/\bupgrade\b/i)) {
    res.end();
    return;
  }

  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
}

function onConnect(ws) {
  ws.on('message', function (message) {
    wss.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(message);
          }
        });
  });
}
if (!module.parent) {
  http.createServer(accept).listen(8081);
} else {
  exports.accept = accept;
}
