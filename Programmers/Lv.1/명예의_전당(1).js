function solution(k, score) {
  let answer = [];
  let lowest = [];
  score.forEach((n, i) => {
    if (i + 1 > k && n > lowest[lowest.length - 1]) {
      lowest.pop();
      if (lowest.length !== k) {
        lowest.push(n);
        lowest.sort((a, b) => b - a);
        answer.push(lowest[lowest.length - 1]);
      }
    } else if (i + 1 <= k) {
      lowest.push(n);
      lowest.sort((a, b) => b - a);
      answer.push(lowest[lowest.length - 1]);
    } else {
      answer.push(lowest[lowest.length - 1]);
    }
  });

  return answer;
}
