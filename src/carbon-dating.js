const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError("Not implemented");
  if (typeof sampleActivity === "string" && sampleActivity.length > 0) {
    let number = Number(sampleActivity);
    if (number > 0) {
      let log = Math.log(MODERN_ACTIVITY / number);
      let k = 0.693 / HALF_LIFE_PERIOD;
      let t = Math.ceil(log / k);
      if (t === Infinity || t < 0) {
        return false;
      } else return t;
    }
    return false;
  }
  return false;
}
console.log(dateSample("9000"));
module.exports = {
  dateSample,
};
