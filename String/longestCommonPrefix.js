function longestCommonPrefix(strs) {
  if (strs.length == 0) return "";

  for (let i = 0; i < strs[0].length; ++i)
    for (let j = 1; j < strs.length; ++j)
      if (i == strs[j].length || strs[j].charAt(i) != strs[0].charAt(i))
        return strs[0].substring(0, i);

  return strs[0];
}

console.log(longestCommonPrefix(["flower", "flight", "flow", "floyed"]));
