//const uft8 = require('utf8');
//console.log("hello");

function TestByteArray(path){

    console.log('testing byte array function');
  
    var str = "CMND\0";
    str += path;
    str += "\0";
    
    console.log('command before becoming byte array ${str}');
    var bytes = []; // char codes
  
    for (var i = 0; i < str.length; ++i) {
    var code = str.charCodeAt(i);//for loop, i is gonna change value, grab single char that i is in position
    bytes = bytes.concat([code]);
    }
    //first pass through the byte is empty and it would be concat with the first letter
    //second pass through byte is C, then concat second letter and it would be CM
    //third pass it would concat the third letter and become CMN
    console.log(`i: ${i} bytes:${bytes}`);
    return bytes;
  }
  
  //console.log('bytes', bytes.join(', '));
  module.exports = { TestByteArray }
  
  