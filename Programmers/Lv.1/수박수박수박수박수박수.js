function solution(n) {
  let answer = '';
  const waterMelon = '수박';
  if (n % 2 === 0) {
    answer = waterMelon.repeat(n / 2);
  } else {
    answer = waterMelon.repeat(n / 2) + '수';
  }
  return answer;
}
