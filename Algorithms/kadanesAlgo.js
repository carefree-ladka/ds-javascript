//Kadane's max sub array

function maxSubArr(nums = []) {
  let curr = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(curr + nums[i], nums[i]);
    max = Math.max(max, curr);
  }
  return max;
}

console.log(maxSubArr([-2, -3, 4, -1, -2, 1, 5, -3]));

// Time Complexity: O(n)
// Auxiliary Space: O(1)
