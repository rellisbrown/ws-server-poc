const WebSocket = require('ws');

const websocketServer = async (expressServer) => {
  const websocketServer = new WebSocket.Server({
    noServer: true,
    path: '/websocket',
  });

  expressServer.on('upgrade', (request, socket, head) => {
    websocketServer.handleUpgrade(request, socket, head, (websocket) => {
      websocketServer.emit('connection', websocket, request);
    });
  });

  websocketServer.on('connection', (websocketConnection, connectionRequest) => {

    const url = new URL(
      connectionRequest.url,
      `http://${connectionRequest.headers.host}/`
    );
    const query = new URLSearchParams(url.search);
    console.log(query.entries()); // in case query params are provided in websocket connection

    websocketConnection.on('message', (message) => {
      const parsedMessage = JSON.parse(message);
      websocketConnection.send(
        JSON.stringify({ message: `Message receieved: ${parsedMessage}` })
      );
    });
  });

  return websocketServer;
};

module.exports = websocketServer;
