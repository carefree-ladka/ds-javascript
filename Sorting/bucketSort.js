function bucketSort(nums = [], bucketSize = 5) {
  if (!nums) return;
  let max = Math.max(...nums);
  let min = Math.min(...nums);

  // Initialise buckets
  let bucketCount = Math.floor((max - min) / bucketSize) + 1;

  let buckets = new Array(bucketCount);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // Distribute input array values into buckets
  for (let i = 0; i < nums.length; i++) {
    buckets[Math.floor((nums[i] - min) / bucketSize)].push(nums[i]);
  }

  // Sort buckets and place back into input array
  nums.length = 0;
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort();
    for (let j = 0; j < buckets[i].length; j++) {
      nums.push(buckets[i][j]);
    }
  }
  return nums;
}

console.log(bucketSort([8, 1, 5, 2, 6, 3, 7]));
