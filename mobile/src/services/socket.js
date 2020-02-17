import socketio from "socket.io-client";

const socket = socketio("http://192.168.0.11:3333", {
  autoConnect: false
});

function subscribeToNewProfs(subcribeFunction) {
  socket.on("new-prof", subcribeFunction);
}

function connect(latitude, longitude, materias) {
  socket.io.opts.query = {
    latitude,
    longitude,
    materias
  };
  socket.connect();
  socket.on("message", text => {
    console.log(text);
  });
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewProfs };
