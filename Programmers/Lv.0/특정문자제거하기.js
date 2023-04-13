function solution(myString, letter) {
  let result = myString;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === letter) {
      result = result.replace(result[i], '');
      i = 0;
    }
  }

  return result;
}

console.log(solution('abcedf', 'f'));
