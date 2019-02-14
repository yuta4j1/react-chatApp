import * as io from 'socket.io-client';

const baseUrl = 'http://localhost:1234/';
const socket: SocketIOClient.Socket = io.connect(baseUrl);

// サーバから受け取ったmessageをpromiseにくるんで返す
const messagePromise = (msg: string = 'message') =>
  new Promise<Message>(resolve => {
    socket.on(msg, (message: Message) => {
      resolve(message);
    });
  });

export const sendMessage = async (msg: Message): Promise<Message> => {
  if (socket) {
    socket.emit('message', msg);
  }
  return await messagePromise('message');
};
