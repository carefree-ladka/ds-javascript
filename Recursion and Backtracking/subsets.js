function subsets(nums, depth = 0, subset = [], result = []) {
  if (depth === nums.length) {
    result.push(subset);
  } else {
    subsets(nums, depth + 1, subset, result);
    subsets(nums, depth + 1, [...subset, nums[depth]], result);
  }
  return result;
}

console.log(subsets([1, 2, 3]));
/* 
2^N Leaf nodes
2*2^N-1 total nodes
Time : 2*2^N-1+N*2^N =O(N*2^N)
Space : N*2^N + N = O(N*2^N)
*/
//---------------------------OR----------------------------------------

function subsets(nums, depth = 0, subset = [], result = []) {
  if (depth === nums.length) {
    result.push([...subset]);
  } else {
    subsets(nums, depth + 1, subset, result);
    subset.push(nums[depth]);
    subsets(nums, depth + 1, subset, result);
    subset.pop();
  }
  return result;
}

//Time and Space : SAME as above