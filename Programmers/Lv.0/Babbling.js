function solution(babbling) {
  let count = 0;
  const word = ['aya', 'ye', 'woo', 'ma'];

  for (let i = 0; i < babbling.length; i++) {
    const usedWord = [];
    let canBabbling = true;
    let exam = babbling[i];

    for (let j = 0; j < word.length; j++) {
      if (usedWord.includes(word[j])) {
        canBabbling = false;
        break;
      }

      if (exam.includes(word[j])) {
        usedWord.push(word[j]);
        exam = exam.replace(word[j], '-');
        canBabbling = true;
      }
    }

    const examLength = exam.length;
    for (let k = 0; k < examLength; k++) {
      exam = exam.replace('-', '');
    }

    if (canBabbling && exam.length === 0) {
      count++;
    }
  }

  return count;
}

const array1 = ['aya', 'yee', 'u', 'maa', 'wyeoo'];
console.log(solution(array1));
