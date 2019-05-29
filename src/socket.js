import 'dotenv/config';
import io from 'socket.io-client';

export default function () {
  const socket = io.connect(process.env.socketurl)

  function updateTable(onMessageReceived) {
    socket.on('update table', onMessageReceived)
  }

  socket.on('error', function (err) {
    console.log('received socket error:')
    console.log(err)
  })

  return {
    updateTable
  }
}
