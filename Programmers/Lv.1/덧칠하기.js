function solution(n, m, section) {
  let answer = 0;
  let end = section[0];

  section.forEach((num, index) => {
    if (end + m <= num) {
      end = section[index];
      answer++;
    }
  });

  return answer + 1;
}
