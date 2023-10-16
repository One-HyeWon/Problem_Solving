function move(arr, start, dest) {
  arr.push([start, dest]);
}

function recursiveFunc(arr, num, start, dest, mid) {
  if (num === 1) return move(arr, start, dest);
  else {
    recursiveFunc(arr, num - 1, start, mid, dest);
    move(arr, start, dest);
    recursiveFunc(arr, num - 1, mid, dest, start);
  }
}

function solution(n) {
  let answer = [];

  recursiveFunc(answer, n, 1, 3, 2);

  return answer;
}
