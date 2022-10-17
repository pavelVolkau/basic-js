const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    let valueData = value;
    if (valueData === undefined) valueData = '';
    if (valueData === null) valueData = 'null';
    this.arr.push(valueData);
    return this;
  },
  removeLink(position) {
    try {
      if (isNaN(position) || position < 1 || position > this.arr.length) {
        this.arr = [];
        throw new Error("You can't remove incorrect link!");
      }
      this.arr = [
        ...this.arr.slice(0, position - 1),
        ...this.arr.slice(position),
      ];
      return this;
    } catch (e) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let temp = this.arr;
    this.arr = [];
    return `( ${temp.join(' )~~( ')} )`;
  },
};

module.exports = {
  chainMaker,
};
