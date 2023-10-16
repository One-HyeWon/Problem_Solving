function solution(N, stages) {
  let obj = {};
  let falseRate = {};
  let people = 0;
  let challagePeople = stages.length;
  let answer = [];

  for (let i = 1; i <= N; i++) {
    obj[i] = 0;
  }

  stages.map((num, index) => {
    obj[num] += 1;
  });

  let stageArr = Object.entries(obj);
  stageArr.map((num, index) => {
    if (!isNaN(num[1])) {
      falseRate[num[0]] = num[1] / (challagePeople - people);
      people += num[1];
    }
  });
  let falseRateArr = Object.entries(falseRate);

  falseRateArr.sort((a, b) => b[1] - a[1]);

  falseRateArr.forEach(num => {
    answer.push(parseInt(num[0]));
  });

  return answer;
}
