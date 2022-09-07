const twoSum = (arr = [], target) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[target - arr[i]]) return [obj[target - arr[i]], i];
    obj[arr[i]] = i;
  }
  return -1;
};

const result = twoSum([1, 2, 3, 4], 5);
console.log(result);
