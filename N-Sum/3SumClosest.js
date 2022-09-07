/* 
Similar to 3 Sum problem, use 3 pointers to point current element, next element and the last element. 
If the sum is less than target, it means we have to add a larger element so next element move to the next. 
If the sum is greater, it means we have to add a smaller element so last element move to the second last element. 
Keep doing this until the end. Each time compare the difference between sum and target, 
if it is less than minimum difference so far, then replace result with it, otherwise keep iterating.
 */

function threeSumClosest(nums = []) {
  nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[nums.length - 1];
  for (let i = 0; i < nums.length - 2; i++) {
    let low = i + 1,
      high = nums.length - 1;
    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];
      if (sum < target) low++;
      else if (sum > target) high--;
      else return target;
      result =
        Math.abs(sum - target) < Math.abs(result - target) ? sum : result;
    }
  }
  return result;
}

threeSumClosest([-1, 2, 1, -4], 1);
