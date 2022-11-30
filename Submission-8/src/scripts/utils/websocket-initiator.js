import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const socket = new WebSocket(url);
    socket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const resto = JSON.parse(message.data);

    NotificationHelper.sendNotification({
      title: resto.name,
      options: {
        body: resto.review,
        icon: 'icons/192x192.png',
      },
    });
  },
};

export default WebSocketInitiator;
