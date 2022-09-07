// By using two pointers technique:

// Time complexity: O(n)
// Space complexity: O(1)

function longestSubstringWithoutRepeating(str) {
  let maxLength = 0;
  let start = 0;
  let indexes = Array(128).fill(-1);
  for (let i = 0; i < str.length; i++) {
    start = Math.max(indexes[str.charCodeAt(i)] + 1, start);
    indexes[str.charCodeAt(i)] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}

console.log(longestSubstringWithoutRepeating("abcdefge"));

