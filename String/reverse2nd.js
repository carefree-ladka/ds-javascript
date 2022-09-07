var reverseWords = function (s) {
  let res = "";
  let word = "";
  for (let c of s) {
    if (c === " ") {
      res += word + c;
      word = "";
    } else {
      word = c + word;
    }
  }
  return res + word;
};
console.log(reverseWords("  Let's take LeetCode contest  ")); //s'teL ekat edoCteeL tsetnoc
