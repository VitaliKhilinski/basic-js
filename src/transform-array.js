const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} newArray initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const newArray = [...arr];
  let setArr = [...newArray];

  for (let i = 0; i <= newArray.length; i++) {
    if (newArray[i] === `--discard-next`) {
      newArray.splice([i], 2);
    }
    if (newArray[i] === `--discard-prev`) {
      if (!newArray.includes(setArr[i + 1]) || i === 0) {
        newArray.splice([i], 1);
      } else newArray.splice([i - 1], 2);
    }
    if (newArray[i] === `--double-next`) {
      if (newArray.indexOf(`--double-next`) === newArray.length - 1) {
        newArray.splice([i], 1);
      } else newArray.splice([i], 1, newArray[i + 1]);
    }
    if (newArray[i] === `--double-prev`) {
      if (
        !newArray.includes(setArr[i + 1]) ||
        newArray.indexOf("--double-prev") === 0
      ) {
        newArray.splice([i], 1);
      } else newArray.splice([i], 1, newArray[i - 1]);
    }
  }
  return newArray;
}
// console.log(transform(["--double-next", 4]));
module.exports = {
  transform,
};
