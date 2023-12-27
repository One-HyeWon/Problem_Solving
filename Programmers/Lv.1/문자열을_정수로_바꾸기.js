function solution(s) {
  let sign = 1;
  if (s[0] === '-') {
    sign = -1;
    s = s.substring(1);
  } else if (s[0] === '+') {
    s = s.substring(1);
  }

  const answer = sign * parseInt(s);

  return answer;
}
