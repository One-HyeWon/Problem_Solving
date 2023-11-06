function solution(s) {
  let answer = [];
  let str = s.split(' ').map(num => {
    return parseInt(num);
  });

  answer.push(Math.min(...str));
  answer.push(Math.max(...str));
  return answer.join(' ');
}
