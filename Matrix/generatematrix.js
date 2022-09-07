/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let result = [...Array(n)].map(() => Array(n).fill(0));
  let c = 1;
  let i = 0;
  let j = n - 1;
  while (c <= n * n) {
    for (let k = i; k <= j; k++) {
      result[i][k] = c;
      c++;
    }
    for (let l = i + 1; l <= j; l++) {
      result[l][j] = c;
      c++;
    }
    for (let m = j - 1; m >= i; m--) {
      result[j][m] = c;
      c++;
    }
    for (let p = j - 1; p > i; p--) {
      result[p][i] = c;
      c++;
    }
    j--;
    i++;
  }
  return result;
};

