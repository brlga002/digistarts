const leftPad = require('../../src/utils/leftPad');

describe('Generate LeftPad', () => {
  it('should generate pad leading zeros to the left', () => {
    const number = leftPad(1, 8);
    expect(number).toBe('00000001');
  });
});
