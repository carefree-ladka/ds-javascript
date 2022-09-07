function permute(s = "", ans = "") {
  if (s.length === 0) {
    console.log(ans);
  }
  for (let i = 0; i < s.length; i++) {
    permute(s.slice(0, i) + s.slice(i + 1), ans + s[i]);
  }
}

permute("aaa", "");
