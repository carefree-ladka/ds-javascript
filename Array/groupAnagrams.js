const groupAnagrams = (strs) => {
  const result = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join("");
    result[key] ? result[key].push(str) : (result[key] = [str]);
  }
  return Object.values(result);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
