function solution(arr) {
  let answer = [];

  arr.reduce((prev, cur, index) => {
    if (cur != arr[index - 1]) answer.push(cur);
  }, 0);

  return answer;
}
