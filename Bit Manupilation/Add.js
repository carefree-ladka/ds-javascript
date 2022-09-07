const BitwiseAdd = (a, b) => {
  while (b != 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
};

console.log("Addition:", BitwiseAdd(4, 5, 4)); // 9

const BitwiseNegate = (a) => BitwiseAdd(~a, 1);

const BitwiseSubtract = (a, b) => BitwiseAdd(a, BitwiseNegate(b));

console.log("Subtraction:", BitwiseSubtract(20, 5));

function BitwiseMultiply(a, b) {
  let m = 1,
    c = 0;
  if (a < 0) {
    a = BitwiseNegate(a);
    b = BitwiseNegate(b);
  }
  while (a >= m && b) {
    if (a & m) {
      c = BitwiseAdd(b, c);
    }
    b = b << 1;
    m = m << 1;
  }
  return c;
}
console.log("Multiplication:", BitwiseMultiply(4, 5)); // 20

function BitwiseDividePositive(a, b) {
  let c = 0;
  if (b != 0) {
    while (a >= b) {
      a = BitwiseSubtract(a, b);
      c++;
    }
  }
  return c;
}
console.log("Division:", BitwiseDividePositive(10, 2)); // 5
