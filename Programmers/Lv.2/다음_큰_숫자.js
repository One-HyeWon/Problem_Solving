function solution(n) {
  function nNum(number) {
    return number
      .toString(2)
      .split('')
      .filter(num => num == 1);
  }

  const oneNum = nNum(n);

  for (let i = n + 1; i < 1000000; i++) {
    if (nNum(i).length == oneNum.length) return i;
  }
}
