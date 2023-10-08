function solution(a, b, n) {
  let returnBottle = 0;
  let haveBottle = n;

  while (haveBottle >= a) {
    returnBottle += parseInt(haveBottle / a) * b;
    haveBottle = parseInt(haveBottle / a) * b + (haveBottle % a);
  }
  return returnBottle;
}
