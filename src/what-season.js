const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */ function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (date instanceof Date === false) {
    throw new Error("Invalid date!");
  }
  if (Object.keys(date).length > 0) {
    throw new Error("Invalid date!");
  }

  const array = [
    [11, 0, 1],
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
  ];
  const seasons = ["winter", "spring", "summer", "autumn (fall)"];

  let month = date.getMonth();
  if (isNaN(month)) {
    throw new Error("Invalid date!");
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === month) {
        return seasons[i];
      }
    }
  }
}

const fakeDate = {
  toString() {
    return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: "Date",
};
Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

// console.log(getSeason(new Date(2025, 1, 22, 23, 45, 11, 500)));

module.exports = {
  getSeason,
};
