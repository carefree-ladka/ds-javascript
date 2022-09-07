const isAnagram = (str1, str2) => {
  let result = new Array(26).fill(0);
  if (str1.length !== str2.length) return;
  for (let i = 0; i < str1.length; i++) {
    result[str1.charCodeAt(i) - 97]++;
    result[str2.charCodeAt(i) - 97]--;
  }
  for (let i = 0; i < 26; i++) {
    if (result[i] !== 0) return false;
  }

  return true;
};

const result = isAnagram("listen", "silent");
console.log(result);
