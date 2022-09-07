/**
 * The goal is break down the problem by finding permutations in subarrays.
 * So we will maintain a subarray of fixed elements and a subarray for
 * exploring permutations.
 *
 *                  [1], [2, 3]    [1, 2], [3]    [1, 2, 3]
 * [], [1, 2, 3] -> [2], [1, 3] -> [1, 3], [2] -> [1, 3, 2]
 *                  [3], [1, 2]    [2, 1], [1]    [2, 1, 3]
 *                                 [2, 3], [1]    [2, 3, 1]
 *                                 [3, 1], [2]    [3, 1, 2]
 *                                 [3, 2], [1]    [3, 2, 1]
 */

var permute = function (nums) {
  const result = [];

  function permute(arr, options) {
    if (!options.length) result.push(arr);

    for (let i = 0; i < options.length; i++) {
      permute(
        [...arr, options[i]],
        [...options.slice(0, i), ...options.slice(i + 1)]
      );
    }
  }
  permute([], nums);
  return result;
};
