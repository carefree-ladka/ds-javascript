/* const twoSum = (arr = [], target) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[target - arr[i]]) return [obj[target - arr[i]], i];
    obj[arr[i]] = i;
  }
  return -1;
};

const result = twoSum([1, 2, 3, 4], 5);
console.log(result); */

//two pointer solution
const twoSum = (arr = [], target) => {
  let s = 0;
  let e = arr.length - 1;
  while (s < e) {
    let sum = arr[s] + arr[e];
    if (sum === target) return [s, e];
    else if (sum > target) e--;
    else s++;
  }
};

const result = twoSum([1, 2, 3, 4], 7);
console.log(result);
