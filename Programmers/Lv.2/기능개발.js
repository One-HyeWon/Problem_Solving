function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    if (progresses[0] >= 100) {
      let count = 0;
      while (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        count++;
      }
      answer.push(count);
    }
  }

  return answer;
}
