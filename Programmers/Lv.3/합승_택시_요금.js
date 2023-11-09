function floydWarshall(matrix) {
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        matrix[j][k] = Math.min(matrix[j][k], matrix[j][i] + matrix[i][k]);
      }
    }
  }
}

function solution(n, s, a, b, fares) {
  const INF = Infinity;

  let taxiMatrix = Array.from({ length: n }, () => Array(n).fill(INF));

  fares.forEach(array => {
    let pointA = array[0] - 1;
    let pointB = array[1] - 1;
    let fee = array[2];
    taxiMatrix[pointA][pointB] = fee;
    taxiMatrix[pointB][pointA] = fee;
  });

  for (let i = 0; i < n; i++) taxiMatrix[i][i] = 0;

  floydWarshall(taxiMatrix);

  let min = INF;

  for (let p = 0; p < n; p++) {
    min = Math.min(min, taxiMatrix[s - 1][p] + taxiMatrix[p][a - 1] + taxiMatrix[p][b - 1]);
  }

  return min;
}
