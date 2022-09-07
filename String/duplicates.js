const findDuplicates = function (s = "") {
  const freq = {};
  const result = [];
  for (let i = 0; i < s.length; i++) {
    freq[s[i]] ? freq[s[i]]++ : (freq[s[i]] = 1);
  }
  for (let key in freq) {
    if (freq[key] > 1) result.push(key);
  }
  return result;
};

console.log(findDuplicates("LALA"));
