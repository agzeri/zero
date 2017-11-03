import { expect } from 'chai';
import author from '../src/index';

describe('Zero Library', () => {
  it('should return the author', () => {
    const expected = 'Zero. By Yair.';

    expect(author('Yair')).to.equal(expected);
  });
});
