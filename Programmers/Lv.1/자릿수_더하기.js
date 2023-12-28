function solution(n) {
  let answer = 0;
  const digit = String(n).split('');

  for (let i = 0; i < digit.length; i++) {
    answer += parseInt(digit[i], 10);
  }

  return answer;
}
