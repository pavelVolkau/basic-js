const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if (Array.isArray(arr)) {
      let maxDepth = 0;
      depth += 1

      for (let elem of arr) {
        let current = this.calculateDepth(elem);

        if (current > maxDepth) maxDepth = current;
      }

      depth += maxDepth;
    }

    return depth;
  }
}

module.exports = {
  DepthCalculator,
};
