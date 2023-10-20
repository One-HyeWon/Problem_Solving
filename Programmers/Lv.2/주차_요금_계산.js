function solution(fees, records) {
  let answer = [];
  const [basicTime, basicFee, unitTime, unitFees] = fees;
  const parkingInfo = new Map();

  records.sort((a, b) => {
    const carNumberA = a.split(' ')[1];
    const carNumberB = b.split(' ')[1];
    return carNumberA.localeCompare(carNumberB);
  });

  while (records.length > 0) {
    const inRecord = records.shift();
    const carNum = inRecord.split(' ')[1];
    let outRecord = [];

    if (records[0] && records[0].split(' ')[1] === carNum) outRecord = records.shift();
    else outRecord = `23:59 ${carNum} OUT`;

    const inTime = inRecord.split(' ')[0];
    const outTime = outRecord.split(' ')[0];

    const timeIn = parseInt(inTime.split(':')[0]) * 60 + parseInt(inTime.split(':')[1]);
    const timeOut = parseInt(outTime.split(':')[0]) * 60 + parseInt(outTime.split(':')[1]);

    const pTime = timeOut - timeIn;

    if (!parkingInfo.has(carNum)) {
      parkingInfo.set(carNum, pTime);
    } else {
      parkingInfo.set(carNum, parkingInfo.get(carNum) + pTime);
    }
  }

  for (const [carNum, pTime] of parkingInfo) {
    let pFees = basicFee;
    if (pTime > basicTime) {
      pFees += Math.ceil((pTime - basicTime) / unitTime) * unitFees;
    }
    answer.push(pFees);
  }

  return answer;
}
