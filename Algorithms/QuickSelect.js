const swap = (arr, x, y) => ([arr[x], arr[y]] = [arr[y], arr[x]]);

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

var findKthLargest = function (nums, k) {
  k = nums.length - k;
  function quickSelect(nums, l, r) {
    let p = partition(nums, l, r);
    if (p > k) return quickSelect(nums, l, p - 1);
    else if (p < k) return quickSelect(nums, p + 1, r);
    else return nums[p];
  }
  return quickSelect(nums, 0, nums.length - 1);
};

for (let i = 1; i <= 3; i++) {
  console.log(findKthLargest([5, 1, 2, 6, 8], i));
}

