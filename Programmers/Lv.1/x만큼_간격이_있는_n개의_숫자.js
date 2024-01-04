function solution(x, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(x + x * i);
  }

  return result;
}
