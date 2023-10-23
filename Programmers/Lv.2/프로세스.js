function solution(priorities, location) {
  let answer = 0;

  while (true) {
    const currentDoc = priorities.shift();
    if (priorities.some(priority => priority > currentDoc)) {
      priorities.push(currentDoc);
    } else {
      answer++;
      if (location === 0) {
        break;
      }
    }
    location = location === 0 ? priorities.length - 1 : location - 1;
  }

  return answer;
}
