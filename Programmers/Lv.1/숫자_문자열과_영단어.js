function solution(s) {
  const numString = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  const inputNum = s;
  let notNum = [];
  let answer = '';

  if (Number(s)) return Number(s);

  for (let i = 0; i < inputNum.length; i++) {
    if (!Number(inputNum[i])) {
      notNum.push(inputNum[i]);
      const findNum = notNum.join('');

      if (numString.includes(findNum)) {
        const findIndex = numString.indexOf(findNum);
        answer += findIndex;
        notNum = [];
      }
    } else answer += inputNum[i];
  }

  return Number(answer);
}

console.log(solution('1zerosevennine34'));
