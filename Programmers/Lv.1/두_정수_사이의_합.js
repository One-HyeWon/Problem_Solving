function solution(a, b) {
  let answer = 0;

  if (a === b) return a;

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    answer += i;
  }

  return answer;
}
