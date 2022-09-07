const swap = (A, a, b) => ([A[a], A[b]] = [A[b], A[a]]);

const partition = (nums, l, r) => {
  let pivot = nums[r];
  let p = l;
  for (let i = l; i < r; i++) {
    if (nums[i] <= pivot) {
      swap(nums, p, i);
      p++;
    }
  }
  swap(nums, p, r);
  return p;
};

function quickSort(nums, low, high) {
  if (low < high) {
    let p = partition(nums, low, high);
    quickSort(nums, low, p - 1);
    quickSort(nums, p + 1, high);
  }
  return nums;
}
const nums = [8, 5, 1, 6, 4, 2];
console.log(quickSort(nums, 0, nums.length - 1));
