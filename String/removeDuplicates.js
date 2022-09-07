const removeDuplicates = function (s = "") {
  const str = Array.from(s);
  let result = "";
  let container = new Set();
  for (let i = 0; i < str.length; i++) container.add(str[i]);
  container.forEach((x) => (result += x));
  return result;
};

console.log(removeDuplicates("banana"));
