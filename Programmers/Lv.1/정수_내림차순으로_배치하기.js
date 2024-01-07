function solution(n) {
  const sortedDigits = Array.from(String(n)).sort((a, b) => b - a);

  return parseInt(sortedDigits.join(''));
}
