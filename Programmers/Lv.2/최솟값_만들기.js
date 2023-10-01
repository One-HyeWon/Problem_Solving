function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let index = 0;
  let sum = 0;
  const answer = A.reduce((prev, cur) => {
    sum = prev + cur * B[index];
    index++;
    return sum;
  }, 0);

  return answer;
}
