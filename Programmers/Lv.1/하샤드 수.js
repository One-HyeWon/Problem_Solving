function solution(x) {
  let answer = 0;
  const numArr = String(x).split('');

  for (let i = 0; i < numArr.length; i++) {
    answer += Number(numArr[i]);
  }

  if (x % answer === 0) return true;
  return false;
}
