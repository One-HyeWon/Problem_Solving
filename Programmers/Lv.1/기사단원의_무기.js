function countDivisors(number) {
  let count = 1;
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      let exponent = 0;
      while (number % i === 0) {
        number /= i;
        exponent++;
      }
      count *= exponent + 1;
    }
  }
  return count;
}

function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let divisor = countDivisors(i);
    divisor > limit ? (answer += power) : (answer += divisor);
  }
  return answer;
}
