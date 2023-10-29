function solution(n) {
  let first = 0,
    second = 1,
    fibo = 0;
  for (let i = 2; i <= n; i++) {
    fibo = (first + second) % 1234567;

    first = second;
    second = fibo;
  }

  return fibo;
}
