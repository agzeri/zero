const expect = require('chai').expect;
const author = require('../src/index');

describe('Zero Library', function () {
  it('should return the author', function () {
    const expected = 'Zero. By Yair.';

    expect(author('Yair')).to.equal(expected);
  });
});
