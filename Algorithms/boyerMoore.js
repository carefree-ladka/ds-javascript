//Boyer Moore Voting Algorithm
function majorityElement(nums = []) {
  let candidate = null;
  let count = 0;

  nums.forEach((num) => {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  });
  console.log(candidate);
}

majorityElement([]);
