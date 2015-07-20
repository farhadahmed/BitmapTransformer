'use strict'

var fs = require('fs');
var tempFile = fs.createWriteStream("./temp.bmp");
//Tells us length of file
//fs.readFile('./bitmaps/palette-bitmap.bmp', function(err, data) {
//  console.log(data.length);
//});
var buf2 = fs.readFileSync('./bitmaps/palette-bitmap.bmp');

//Tells us where the palette starts
//console.log(buf2.readUInt32LE(10));
//Prints an inversion of the first pixel
//console.log(255 - buf2.readUInt8(1078));

var secondBuf = new Buffer(buf2.length);
var counter = 0;

//Creates copy of buf2
while (counter < buf2.length-1) {
  secondBuf[counter] = buf2.readUInt8(counter);
  counter++;
}
console.log(secondBuf === buf2);
//Write secondBuf (a copy of buf2) to the new tempFile
//tempFile.write(secondBuf);
//tempFile.end();

//console.log(secondBuf.readUInt32BE(10));
//console.log(255 - secondBuf.readUInt8(1078));

console.log('secondBuf starts at: ' + secondBuf.readUInt32LE(10))


//for (var i = 1078; i < buf2.length-1; i++) {
//  secondBuf.writeUInt8(255 - buf2.readUInt8(i), i);
//};
var offset = secondBuf.readUInt32LE(10);

var palette = secondBuf.slice(54, offset);
for (var j = 0; j < 256 * 4; j++) {
  //255-readUINt.. changes palette. ',j' says which pixel to change
  palette.writeUInt8(255 - palette.readUInt8(j), j);
};

tempFile.write(secondBuf);
tempFile.end();

//Log if there are any differences between secondBuf and buf2
// for (var i = 0; i < secondBuf.length-1; i++) {
//   if (secondBuf.readUInt8(i) !== buf2.readUInt8(i)){
//     console.log(secondBuf.readUInt8(i));
//     console.log(i);
//   };
// };

