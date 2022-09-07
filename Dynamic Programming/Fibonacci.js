//Top Down (Memoization)

function fib(n) {
  const lookup = Array(n + 1).fill(-1);
  if (lookup[n] === -1) {
    if (n <= 1) lookup[n] = n;
    else lookup[n] = fib(n - 1) + fib(n - 2);
  }
  return lookup[n];
}

// console.log(fib(8));

//Bottom Up (Tabulation)

function fib(n) {
  const lookup = Array(n + 1);
  lookup[0] = 0;
  lookup[1] = 1;
  for (let i = 2; i <= n; i++) {
    lookup[i] = lookup[i - 1] + lookup[i - 2];
  }
  return lookup[n];
}
console.log(fib(8));
