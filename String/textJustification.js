//Asked in Google :)
//Type: Hard Leetcode

/**
 * @param {String[]} words
 * @param {Number} maxWidth
 * @return {String[]} 
 * This function returns a justified string array
 */
const fullJustify = (words = [], maxWidth) => {
  const ans = [];
  let row = [];
  let rowLetters = 0;

  for (let word of words) {
    if (rowLetters + word.length + row.length > maxWidth) {
      for (let i = 0; i < maxWidth - rowLetters; i++)
        row[i % (row.length - 1 || 1)] += " ";
      ans.push(row.join(""));
      row = [];
      rowLetters = 0;
    }
    row.push(word);
    rowLetters += word.length;
  }
  return ans.concat(row.join(" ").padEnd(maxWidth));
};

console.log(
  fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16
  )
);
//Output : ["This    is    an","example  of text","justification.  "]

//Time : O(lines * maxWidth )
//Space : O(lines * maxWidth )
