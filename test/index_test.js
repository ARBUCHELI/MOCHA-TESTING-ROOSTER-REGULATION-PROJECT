const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Define expected output
      const expected = 'cock-a-doodle-doo!';
 
      // Call Rooster.announceDawn and store result in variable
      const result = Rooster.announceDawn();
 
// Use an assert method to compare actual and expected result
      assert.equal(expected,result);
    })
  })
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const inputNumber = 12;
      const expected = '12';

      const actual = Rooster.timeAtDawn(inputNumber);

      assert.strictEqual(actual, expected);
    })
  })
    it('throws a range error if passed a number less than 0', () => {
      const inputNumber = -1;
      const expected = RangeError;

      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber)
      } ,expected);
    })
    it('throws a range error if passed a number greater than 23', () => {
      const inputNumber = 24;
      const expected = RangeError;

      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber)
      } , expected);
    })

})