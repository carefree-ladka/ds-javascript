// //Using JavaScript Object
// const map = {};
// const nums = [1, 2, 3, 1, 1, 2, 4];
// nums.forEach((x) => (map[x] = ~~map[x] + 1));

// console.log(map);

// //Using JavaScript array reduce method

// console.log(
//   nums.reduce((acc, curr) => {
//     acc[curr] ? acc[curr]++ : (acc[curr] = 1);
//     return acc;
//   }, {})
// );

// //Using JavaScript Map
// const freq = new Map();
// nums.forEach((x) => freq.set(x, (freq.get(x) || 0) + 1));
// console.log(...freq);
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

console.log(topKFrequent([7, 2, 3, 1, 5, 4],2));
