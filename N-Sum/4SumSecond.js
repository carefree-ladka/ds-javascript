function fourSumCount(A, B, C, D) {
  var mp = {};

  for (var i = 0; i < C.length; i++) {
    for (var j = 0; j < D.length; j++) {
      var sum = C[i] + D[j];
      mp[sum] = mp[sum] + 1 || 1;
    }
  }

  var res = 0;
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < B.length; j++) {
      res += mp[-1 * (A[i] + B[j])] || 0;
    }
  }

  return res;
}

fourSumCount();
