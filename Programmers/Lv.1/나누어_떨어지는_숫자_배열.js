function solution(arr, divisor) {
  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      resultArray.push(arr[i]);
    }
  }

  if (resultArray.length === 0) {
    return [-1];
  }

  return resultArray.sort((a, b) => a - b);
}
