const containsDigits = function (s = "") {
  for (let i = 0; i < s.length; i++) if (!isNaN(s[i])) return true;
  return false;
};
console.log(containsDigits("AB677CF"));
