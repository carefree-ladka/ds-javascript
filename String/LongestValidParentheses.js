/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let max = (left = right = 0);
  let i = 0;

  while (i < s.length) {
    if (s[i] === "(") {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      max = Math.max(max, left + right);
    } else if (left < right) {
      left = right = 0;
    }
    i++;
  }

  left = right = 0;

  i = s.length - 1;

  while (i >= 0) {
    if (s[i] === "(") {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      max = Math.max(max, left + right);
    } else if (left > right) {
      left = right = 0;
    }
    i--;
  }
  return max;
};

//T: O(N)
//S : O(1)
