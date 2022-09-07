// const root = document.querySelector(".root");

// const dfs = (node) => {
//   let stack = [node];
//   let res = [];
//   while (stack.length) {
//     const node = stack.pop();
//     if (node) {
//       res.push(node.getAttribute("class"));
//     }
//     stack.push(...node.children);
//   }
//   return res;
// };

// const bfs = (node) => {
//   let queue = [node];
//   let res = [];
//   while (queue.length) {
//     const node = queue.shift();
//     if (node) {
//       res.push(node.getAttribute("class"));
//     }
//     queue.push(...node.children);
//   }
//   return res;
// };

// console.log(JSON.stringify(bfs(root), null, 2));
// console.log(JSON.stringify(dfs(root), null, 2));

// function trimLast(s = "") {
//   let i = s.length - 1;
//   let end = 0;
//   while (i >= 0) {
//     if (s[i] !== " ") {
//       end = i;
//       break;
//     }
//     i--;
//   }
//   return s.substring(0, end + 1);
// }

// console.log(trimLast("    there ?      "));

// const handleSubmit = (str) => {
//   //loop
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// };

// console.log(handleSubmit("    there ?      "));

//Binet's Formula
// function fib(n) {
//   let phi = (1 + Math.sqrt(5)) * 0.5;
//   let fib = (Math.pow(phi, n) - Math.pow(1 - phi, n)) / Math.sqrt(5);
//   return Math.round(fib);
// }

// console.log(fib(9));

//Time : O(logN)
//Space : O(1)

// /**
//  * @return {Number} r
//  */
// function fib(n) {
//   let p = 0,
//     q = 0,
//     r = 1;

//   for (i = 0; i <= n; i++) {
//     p = q;
//     q = r;
//     r = p + q;
//   }
//   return r;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(fib(i));
// }

// function* moveZeros(nums = []) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[j++] = nums[i];
//     }
//   }
//   while (j < nums.length) nums[j++] = 0;
//   yield nums;
// }

// console.log(...moveZeros([1, 0, 2, 1, 0, 0]));