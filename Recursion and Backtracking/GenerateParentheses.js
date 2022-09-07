const generateParenthesis = (n) => {
  const res = [];
  const go = (l, r, s) => {
    if (l == 0 && r == 0) res.push(s);
    if (l > 0) go(l - 1, r, s + "(");
    if (l < r) go(l, r - 1, s + ")");
  };
  go(n, n, "");
  return res;
};

console.log(generateParenthesis(3));
