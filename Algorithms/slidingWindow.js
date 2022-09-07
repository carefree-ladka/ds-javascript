//Sliding Window Approach

function maxSubArray(nums = [], K) {
  let max = 0;
  let sum = 0;
  // find initial sum of first k elements
  for (let i = 0; i < K; i++) {
    sum += nums[i];
    max = sum;
  }

  for (let i = K; i < nums.length; i++) {
    sum += nums[i] - nums[i - K];
    max = Math.max(sum, max);
  }
  return max;
}

console.log(maxSubArray([1, 4, 2, 10, 2, 3, 1, 0, 20], 4));
