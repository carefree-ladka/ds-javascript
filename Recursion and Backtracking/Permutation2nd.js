/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function swap(nums, i, j) {
  temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
function permuteUnique(nums) {
  nums.sort((a, b) => a - b);
  let perms = [];
  permute(nums, 0, perms);
  return perms;
}
function permute(nums, i, perms) {
  if (i == nums.length) {
    perms.push(nums);
  } else {
    for (let j = i; j < nums.length; j++) {
      if (j == i || nums[j] != nums[i]) {
        swap(nums, i, j);
        permute(nums.slice(), i + 1, perms);
      }
    }
  }
}
