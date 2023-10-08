function solution(k, tangerine) {
  let answer = 0;
  const countTangerine = new Map();

  tangerine.forEach(tNum => {
    countTangerine.set(tNum, (countTangerine.get(tNum) || 0) + 1);
  });

  const tangerineCount = Array.from(countTangerine.values()).sort((a, b) => b - a);

  for (let i = 0; i < tangerineCount.length; i++) {
    if (k <= 0) break;
    if (k - tangerineCount[i] < 0) {
      answer++;
      break;
    } else {
      k -= tangerineCount[i];
      answer++;
    }
  }

  return answer;
}
