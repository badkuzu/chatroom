import http from "http"
import { WebSocket, WebSocketServer } from "ws"

const server = http.createServer();
const wss = new WebSocketServer({ server });

wss.on("connection", function connection(ws) {
  let randomUserId = (Math.random() * 1000).toFixed();
  console.log(randomUserId + " connected");

  ws.on("message", function message(data) {
    console.log(randomUserId + " sent: " + data.toString());

    wss.clients.forEach(function each(client) {
      if (client !== ws) {
        client.send(randomUserId + ": " + data.toString());
      }
    });
  });
});

server.listen(8000);
