const strStr = (haystack, needle) => {
  let m = haystack.length;
  let n = needle.length;

  for (let i = 0; i < m - n + 1; i++) {
    if (haystack.substring(i, i + n) === needle) return i;
  }
  return -1;
};

console.log(strStr("ABCDEFG", "CDEF"));
