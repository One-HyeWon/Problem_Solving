function solution(s) {
  return s.length == 4 || s.length == 6 ? (s.includes('e') ? false : !isNaN(Number(s))) : false;
}
