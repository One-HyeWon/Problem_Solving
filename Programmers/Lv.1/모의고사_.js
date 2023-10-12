function solution(answers) {
  let p1 = [1, 2, 3, 4, 5];
  let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let ps1 = 0,
    ps2 = 0,
    ps3 = 0;

  let answer = [];

  answers.forEach((n, i) => {
    if (n === p1[i % p1.length]) ps1++;
    if (n === p2[i % p2.length]) ps2++;
    if (n === p3[i % p3.length]) ps3++;
  });

  if (ps1 >= ps2 && ps1 >= ps3) answer.push(1);
  if (ps2 >= ps1 && ps2 >= ps3) answer.push(2);
  if (ps3 >= ps1 && ps3 >= ps2) answer.push(3);

  return answer;
}
