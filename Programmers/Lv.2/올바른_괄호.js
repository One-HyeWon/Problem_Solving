function solution(s) {
  const stack = [];

  if (s[0] === ')') return false;

  s.split('').map(char => {
    if (char == '(') {
      stack.push(char);
    } else if (char == ')' && stack.length != 0) {
      stack.pop();
    } else return false;
  });
  // === 은 엄격한 비교이므로 효율성 테스트 2번 통과 못 했음 => 조건식 축약시키기
  return stack.length == 0;
}
