'use strict'

var fs = require('fs');

function bufferTransform() {

  //Read bitmap
  var buf2 = fs.readFileSync('../bitmaps/palette-bitmap.bmp');

  //Create a second buffer that is a copy of buf2
  var secondBuf = new Buffer(buf2.length);
  var counter = 0;
  while (counter < buf2.length-1) {
    secondBuf[counter] = buf2.readUInt8(counter);
    counter++;
  }

  //Transform the second buffer
  for (var i = 1078; i < buf2.length-1; i++) {
    secondBuf[i] = 5 + buf2.readUInt8(i);
  };

  //Create a new file and write the transformed second buffer to the new file
  var newBmp = fs.createWriteStream("./newImage.bmp");
  newBmp.write(secondBuf);
  newBmp.end();

}

module.exports = bufferTransform;
