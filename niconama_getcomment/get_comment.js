var WebSocketClient = require('websocket').client;
const fs = require('fs');

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
  });
  
  client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
  
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('WebSocket Client Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
          console.log("Received: '" + message.utf8Data + "'");
        }
    });
        
    connection.sendUTF('{"thread":{"version":20061206,"thread":"NXlv323724875","service":"LIVE"}}');
  });
  
client.connect('ws://nmsg.nicovideo.jp:2580/websocket', 'msg.nicovideo.jp#json');
  