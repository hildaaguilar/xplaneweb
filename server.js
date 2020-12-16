var expri1 = require('./final.js'); 
var dgram = require('dgram');
const final = require('./final.js');

var client = dgram.createSocket('udp4');
var PORT = 49000;
var HOST = '127.0.0.1';

console.log('Server-side code running');

const express = require('express');

const app = express();

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