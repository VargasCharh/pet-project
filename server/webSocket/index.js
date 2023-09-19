const { WebSocketServer } = require('ws');
const sessionParser = require('../src/middleware/sessionMiddle');

const map = new Map();

function onSocketError(err) {
  console.error(err);
}

const wss = new WebSocketServer({ clientTracking: false, noServer: true });

const upgradeCb = (request, socket, head) => {
  socket.on('error', onSocketError);

  console.log('Parsing session from request...');

  sessionParser(request, {}, () => {
    if (!request.session.user) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    console.log('Session is parsed!');

    socket.removeListener('error', onSocketError);

    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });
};

const connectionCb = (ws, request) => {
  const { id } = request.session.user;

  map.set(id, [ws, request.session.user]);

  map.forEach(([wsItem]) => {
    wsItem.send(
      JSON.stringify({
        type: 'USERS_ONLINE',
        payload: Array.from(map.values()).map(([, oneUser]) => oneUser),
      }),
    );
  });

  ws.on('error', console.error);

  ws.on('message', (message) => {
    const data = JSON.parse(message);

    switch (data.type) {
      case 'CHAT_MESSAGE':
        map.forEach(([wsItem]) => {
          wsItem.send(
            JSON.stringify({
              type: 'CHAT_MESSAGE',
              payload: {
                user: request.session.user,
                message: data.payload,
                id: Date.now(),
              },
            }),
          );
        });

        break;

      default:
        break;
    }
  });

  ws.on('close', () => {
    map.delete(id);
    map.forEach(([wsItem]) => {
      wsItem.send(
        JSON.stringify({
          type: 'USERS_ONLINE',
          payload: Array.from(map.values()).map(([, oneUser]) => oneUser),
        }),
      );
    });
  });
};

module.exports = { wss, connectionCb, upgradeCb };