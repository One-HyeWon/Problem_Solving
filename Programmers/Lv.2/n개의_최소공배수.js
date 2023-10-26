function gcd(n, m) {
  if (m === 0) return n;
  return gcd(m, n % m);
}

function solution(arr) {
  let answer = 1;

  arr.sort((a, b) => a - b);
  arr.map((num, index) => {
    let gcdNum = gcd(arr[index], answer);
    answer = (arr[index] * answer) / gcdNum;
  });

  return answer;
}
