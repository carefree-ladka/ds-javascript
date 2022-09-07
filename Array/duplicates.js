const hasDuplicates = (arr) => {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return true;
    set.add(arr[i]);
  }
  return false;
};

const result = hasDuplicates([1, 2, 2, 3, 4]);
console.log(result);

