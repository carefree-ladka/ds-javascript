var groupAnagrams = function (strs) {
  let mapping = {};
  for (let str of strs) {
    let charCount = new Array(26).fill(0);
    for (let c of str) {
      charCount[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    if (!mapping[charCount]) mapping[charCount] = [];
    mapping[charCount].push(str);
  }
  return Object.values(mapping);
};
