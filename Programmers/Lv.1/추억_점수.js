function solution(name, yearning, photo) {
  let answer = [];
  const miss = {};
  let pName = '';

  name.forEach((str, index) => {
    miss[str] = yearning[index];
  });

  photo.forEach(row => {
    let sum = row.reduce((sumRow, name) => {
      let rowsum = 0;
      for (pName in miss) {
        if (pName === name) {
          rowsum += miss[pName];
          break;
        }
      }
      return sumRow + rowsum;
    }, 0);
    answer.push(sum);
  });

  return answer;
}
