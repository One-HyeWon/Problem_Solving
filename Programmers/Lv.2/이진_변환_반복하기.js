function solution(s) {
  let answer = [];
  let zero = 0;
  let num = 0;

  while (s !== '1') {
    const sArray = s.split('');
    zero += sArray.filter(number => number === '0').length;
    s = sArray.filter(number => number === '1').length.toString(2);
    num++;
  }

  answer = [num, zero];
  return answer;
}
