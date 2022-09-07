function spiralMatrix(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let spiral = new Array(m * n);

  let top = 0,
    bottom = m - 1,
    left = 0,
    right = n - 1,
    count = 0;
  while (true) {
    //Go right  [1,2,3] -->[5]
    for (let i = left; i <= right; i++) spiral[count++] = matrix[top][i];
    top++;
    if (top > bottom) break;

    //Go down [6,9]
    for (let i = top; i <= bottom; i++) spiral[count++] = matrix[i][right];
    right--;
    if (right < left) break;

    //Go left [8,7]
    for (let i = right; i >= left; i--) spiral[count++] = matrix[bottom][i];
    bottom--;
    if (top > bottom) break;

    //Go up [4]
    for (let i = bottom; i >= top; i--) spiral[count++] = matrix[i][left];
    left++;
    if (right < left) break;
  }

  return spiral;
}

console.log(
  spiralMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //[1, 2, 3, 6, 9, 8, 7, 4, 5]
