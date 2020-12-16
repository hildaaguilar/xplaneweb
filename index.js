var expri1 = require('./final.js'); 
var dgram = require('dgram');
const final = require('./final.js');

var client = dgram.createSocket('udp4');
var PORT = 49000;
var HOST = '127.0.0.1';

var xplaneMsg = expri1.TestByteArray("sim/flight_controls/brakes_toggle_regular");
console.log('bytes for xplane message', xplaneMsg.join(','));

var message = new Buffer(xplaneMsg);
client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
  if (err) throw err;
  console.log('UDP message sent to' + HOST + ';' + PORT);
  client.close();
});