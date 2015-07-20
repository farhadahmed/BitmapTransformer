var expect = require('chai').expect;
var fs = require("fs");
//Read in original and set to variable
//then read in altered bitmap
describe('readCreateTransform.js', function() {
  it('will be the same length as original buffer', function() {
    var original = fs.readFileSync("./bitmaps/palette-bitmap.bmp")
    var newImage = fs.readFileSync("./temp.bmp")
    var offset = original.readUInt32LE(10);

    for (var i = 54; i < offset; i++) {
      expect(newImage.readUInt8(i)).to.eql(255 - original.readUInt8(i));
    }
  });
});
