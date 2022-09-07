//O(N)

var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 1));

//or

const topKFrequent = (nums, k) => {
  const map = {};
  const result = [];
  const bucket = Array(nums.length + 1)
    .fill()
    .map(() => []);

  for (let num of nums) {
    map[num] = ~~map[num] + 1;
  }

  for (let num in map) {
    bucket[map[num]].push(parseInt(num));
  }

  for (let i = nums.length; i >= 0 && k > 0; k--) {
    while (bucket[i].length === 0) i--;
    result.push(bucket[i].shift());
  }

  return result;
};
