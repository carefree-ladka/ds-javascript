const validParenthesis = (s = "") => {
  const stack = [];
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && obj[stack[stack.length - 1]] === s[i]) stack.pop();
    else stack.push(s[i]);
  }
  return stack.length === 0;
};

const str = "(})";
console.log(validParenthesis(str));
