const countAndSay = function (n) {
  let str = "1";
  for (let i = 1; i < n; i++) {
    let strArray = str;
    str = "";
    let count = 1;
    // Loop through current nth level line
    for (let j = 0; j < strArray.length; j++) {
      // Next digit is different
      if (strArray[j] !== strArray[j + 1]) {
        // Go to next non-matching digit
        str += count + strArray[j];
        count = 1;
      } else {
        count++;
      }
    }
  }
  return str;
};

console.log(countAndSay(6));

//The time complexity of the above code is O(N*L), where N = nth term in the sequence and L = max length of the string.
//
