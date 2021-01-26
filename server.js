// Import XPlane class from the package
import { XPlaneClient } from "xplane-udp"
//var XPlaneClient = require('xplane-udp');

var expri1 = require('./final.js'); 
var dgram = require('dgram');
const final = require('./final.js');

var client = dgram.createSocket('udp4');
var PORT = 49000;
var HOST = '127.0.0.1';

console.log('Server-side code running');

const express = require('express');

const app = express();

// =================== socketio =====================
var cors = require('cors');
var app2 = require('express')();
app2.use(cors());
var port = 3000;
var http = require('http').Server(app2);
var io = require('socket.io')(http);


io.on('connection', function(socket) {
  socket.emit('announcements', { message: 'A new user has joined!' });


  socket.on('event', function(data) {
      console.log('A client sent us this dumb message:', data.message);
  });

});

http.listen(port, function () {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
  var time = today.getHours().toString().padStart(2, '0') + ":" + today.getMinutes().toString().padStart(2, '0') + ":" + today.getSeconds().toString().padStart(2, '0');
  console.log( 'Server started on ' + date + ' ' + time);
  console.log( 'Web server listening on http://localhost:' + port);
  console.log( 'Socket.IO server listening on http://localhost:' + port + '/socket.io/');
  console.log( '');
});


setInterval(sendData, 100);
function sendData() {
  if(dataToSend.attitude &&
    dataToSend.attitude.roll && dataToSend.attitude.pitch && dataToSend.attitude.truehdg){
  console.log(`sending data, roll:${dataToSend.attitude.roll}  pitch:${dataToSend.attitude.pitch}  yaw:${dataToSend.attitude.truehdg}`);
  io.emit('xplaneData', dataToSend);
  }
}
// ====================================================


var dataToSend = {}

// Create a client on a specific port (this is a value you define in your xplane game settings)
const client2 = new XPlaneClient(49100)
// Start the UDP listener
client2.start()

// Subscribe to the updated event
// This will fire at the rate at which you send UDP updates (set in-game)
client2.on("updated", (data) => {

  dataToSend = data;
  if(typeof(data.attitude) != "undefined") {
     //console.log(`roll:${data.attitude.roll}  pitch:${data.attitude.pitch}  yaw:${data.attitude.truehdg} `)
}

})









// serve files from the public directory
app.use(express.static('public'));

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/clicked', (req, res) => {
    console.log('you clicked, connected to server')

    var xplaneMsg = expri1.TestByteArray("sim/flight_controls/brakes_toggle_regular");
    var message = new Buffer(xplaneMsg);
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
      if (err) throw err;
      console.log('UDP message sent to' + HOST + ';' + PORT);

    });
    res.sendStatus(200);
  });




  app.post('/press', (req, res) => {
    console.log('you pressed throttle up')

    var xplaneMsg = expri1.TestByteArray("sim/engines/throttle_up");
    var message = new Buffer(xplaneMsg);
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
      if (err) throw err;
      console.log('UDP message sent to' + HOST + ';' + PORT);
    });
    res.sendStatus(200);
  });
  

  app.post('/hit', (req, res) => {
    console.log('you pressed trottle down')

    var xplaneMsg = expri1.TestByteArray("sim/engines/throttle_down");
    var message = new Buffer(xplaneMsg);
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
      if (err) throw err;
      console.log('UDP message sent to' + HOST + ';' + PORT);

    });
    res.sendStatus(200);
  }); 


  app.post('/tik', (req, res) => {
    console.log('you pressed pitch takeoff')

    var xplaneMsg = expri1.TestByteArray("sim/flight_controls/pitch_trim_takeoff");
    var message = new Buffer(xplaneMsg);
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
      if (err) throw err;
      console.log('UDP message sent to' + HOST + ';' + PORT);
    });
    res.sendStatus(200);
  }); 


  app.post('/poke', (req, res) => {
    console.log('pitch up')

    var xplaneMsg = expri1.TestByteArray("sim/flight_controls/pitch_trim_up");
    var message = new Buffer(xplaneMsg);
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
      if (err) throw err;
      console.log('UDP message sent to' + HOST + ';' + PORT);
    });
    res.sendStatus(200);
  }); 


  app.post('/tap', (req, res) => {
    console.log('pitch down')

    var xplaneMsg = expri1.TestByteArray("sim/flight_controls/pitch_trim_down");
    var message = new Buffer(xplaneMsg);
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
      if (err) throw err;
      console.log('UDP message sent to' + HOST + ';' + PORT);
    });
    res.sendStatus(200);
  }); 


  app.post('/rightRudder', (req, res) => {
    console.log('right rudder')

    var xplaneMsg = expri1.TestByteArray("sim/flight_controls/rudder_rgt");
    var message = new Buffer(xplaneMsg);
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
      if (err) throw err;
      console.log('UDP message sent to' + HOST + ';' + PORT);
    });
    res.sendStatus(200);
  }); 



  app.post('/leftRudder', (req, res) => {
    console.log('left rudder')

    var xplaneMsg = expri1.TestByteArray("sim/flight_controls/rudder_lft");
    var message = new Buffer(xplaneMsg);
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
      if (err) throw err;
      console.log('UDP message sent to' + HOST + ';' + PORT);
    });
    res.sendStatus(200);
  }); 