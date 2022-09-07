const removeDuplicates = (s = "", stack = []) => {
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) stack.push(s[i]);
    else {
      if (stack[stack.length - 1] === s[i]) stack.pop();
      else stack.push(s[i]);
    }
  }
  let str = "";
  while (stack.length > 0) {
    const top = stack[stack.length - 1];
    stack.pop();
    str = top + str;
  }
  return str;
};

console.log(removeDuplicates("abbccd"));
