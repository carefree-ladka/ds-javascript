//Time: O(N^2)
//Space : O(N)

function longestIncreasingSubsequence(nums) {
  let N = nums.length;
  if (N === 0) return 0;

  const dp = Array(N).fill(1);
  let maxSoFar = 1;

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    maxSoFar = Math.max(maxSoFar, dp[i]);
  }
  return maxSoFar;
}

console.log(longestIncreasingSubsequence([0, 1, 0, 3, 2, 3]));

//Binary Search O(NlogN)

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  function binarySearch(array, num) {
    let left = 0,
      right = array.length;
    while (left < right) {
      const mid = ~~((right - left) / 2 + left);
      if (array[mid] < num) left = mid + 1;
      else right = mid;
    }

    return right;
  }

  const array = [];

  for (const num of nums) {
    const pos = binarySearch(array, num);
    if (pos === array.length) array.push(num);
    else array[pos] = num;
  }

  return array.length;
};
