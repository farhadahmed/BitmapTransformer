var expect = require('chai');
var readCreateTransform = require('../lib/readCreateTransform.js');

describe('readCreateTransform.js', function() {
  it('will be the same length as original buffer', function() {
    expect('../lib/newImage.bmp'.length).to.eql('../bitmaps/palette-bitmap.bmp'.length)
  });
});
