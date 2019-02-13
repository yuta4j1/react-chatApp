import * as io from 'socket.io-client';

const baseUrl = 'http://localhost:1234/';
const socket: SocketIOClient.Socket = io.connect(baseUrl);

export const sendMessage = (msg: Message) => {
  let aMessage: Message;
  if (socket) {
    socket.emit('message', msg);
  }
  socket.on('message', (msg: Message) => {
    // TODO １．コールバック内で受け取ったメッセージをどうにか戻り値に渡す
    // ２． 表示するメッセージをreduxで管理するようにする
    aMessage = msg;
    console.log(msg);
  });
  // return aMessage;
};
