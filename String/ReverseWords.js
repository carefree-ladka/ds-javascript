function reverseWords(s = "") {
  const queue = [];
  let i = 0;
  let start = -1;
  while (i < s.length) {
    if (s[i] !== " ") {
      start = i;
      while (i < s.length && s[i] !== " ") i++;
      queue.unshift(s.substring(start, i));
    }
    i++;
  }
  return queue.join(" ");
}

console.log(reverseWords("   there time ago    "));

//Time : O(N)
//Space : O(N)
