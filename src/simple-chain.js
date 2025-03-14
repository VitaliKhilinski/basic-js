const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    return this.chain
      .map((element) => {
        return `( ${element} )`;
      })
      .join("~~");
  },
};
/* console.log(
  chainMaker
    .addLink(0)
    .addLink(NaN)
    .addLink(1)
    .reverseChain()
    .addLink(0)
    .reverseChain()
    .reverseChain()
    .addLink(1)
    .addLink(Infinity)
    .reverseChain()
    .finishChain()
); */
module.exports = {
  chainMaker,
};
