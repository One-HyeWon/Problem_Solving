function solution(cards1, cards2, goal) {
  let answer = [];
  goal.forEach((str, index) => {
    if (cards1[0] === str) {
      cards1.shift();
      answer.push(str);
    } else if (cards2[0] === str) {
      cards2.shift();
      answer.push(str);
    }
    return 'No';
  });

  if (answer.length === goal.length) return 'Yes';
  return 'No';
}
