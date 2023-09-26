function solution(phoneNumber) {
  const tobeSeeNum = phoneNumber.slice(phoneNumber.length - 4, phoneNumber.length);
  const answer = '*'.repeat(phoneNumber.length - 4) + tobeSeeNum;
  return answer;
}
