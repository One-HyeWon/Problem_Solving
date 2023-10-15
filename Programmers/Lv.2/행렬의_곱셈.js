function solution(arr1, arr2) {
  const row1 = arr1.length;
  const col1 = arr1[0].length;
  const col2 = arr2[0].length;

  const answer = Array(row1)
    .fill()
    .map(() => Array(col2).fill(0));

  answer.forEach((row, i) => {
    row.forEach((rrow, j) => {
      answer[i][j] = arr1[i].reduce((sum, val, k) => sum + val * arr2[k][j], 0);
    });
  });

  return answer;
}
