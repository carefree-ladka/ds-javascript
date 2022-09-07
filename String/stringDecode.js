var decodeString = function (str) {
  /*
      we have 4 possibilities
      1) opening braces -> new sequence starts, so 
      add curr string and curr number to the stack, reassign both
      to initial values
      2) closing braces -> the sequence is over, it is time to create a substring
      by getting prev string and prev number from the stack, add prev string(repeated prev num times)
      to curr string
      3) if it is number add to curr num
      4) if it is char add to curr string
  */
  let stack = [];
  let currStr = "";
  let currNum = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[") {
      stack.push(currStr);
      stack.push(currNum);
      currStr = "";
      currNum = 0;
    } else if (str[i] === "]") {
      let prevNum = stack.pop();
      let prevStr = stack.pop();
      currStr = prevStr + currStr.repeat(prevNum);
    } else if (!isNaN(str[i])) {
      currNum = `${currNum}${str[i]}`;
    } else {
      currStr += str[i];
    }
  }

  return currStr;
};

console.log(decodeString("3[2ac]"));
