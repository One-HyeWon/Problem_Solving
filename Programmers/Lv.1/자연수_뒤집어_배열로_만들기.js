function solution(n) {
  const reversedArray = [];
  while (n > 0) {
    const digit = n % 10;
    reversedArray.push(digit);
    n = Math.floor(n / 10);
  }
  return reversedArray;
}
