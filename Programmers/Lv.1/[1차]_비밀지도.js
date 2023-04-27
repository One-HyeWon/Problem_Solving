function solution(n, arr1, arr2) {
  const map1 = arr1;
  const map2 = arr2;
  const size = n;
  const answer = [];

  for (let i = 0; i < size; i++) {
    let num1 = map1[i].toString(2);
    let num2 = map2[i].toString(2);
    const numArr = [];
    let joinArr = '';

    const num1Length = num1.length;
    const num2Length = num2.length;

    if (num1.length !== size) {
      for (let i = 0; i < size - num1Length; i++) {
        const temp = '0' + num1;
        num1 = temp;
      }
    }

    if (num2.length !== size) {
      for (let i = 0; i < size - num2Length; i++) {
        const temp = '0' + num2;
        num2 = temp;
      }
    }

    for (let j = 0; j < size; j++) {
      if (num1[j] === '0' && num2[j] === '0' && num1[j] === num2[j]) {
        numArr.push(' ');
      } else {
        numArr.push('#');
      }
    }
    joinArr = numArr.join('');
    answer.push(joinArr);
  }

  return answer;
}
