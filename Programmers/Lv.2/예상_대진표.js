function solution(n, a, b) {
  let numA = a,
    numB = b;
  let round = 0;

  while (numA != numB) {
    numA = Math.round(numA / 2);
    numB = Math.round(numB / 2);
    round++;
  }
  return round;
}
