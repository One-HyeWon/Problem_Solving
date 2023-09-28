function solution(s) {
  let splitS = s.split(' ');

  let checkNum = splitS.map(function (str) {
    if (!isNaN(str.charAt(0))) {
      return str.toLowerCase();
    } else {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  });

  return checkNum.join(' ');
}

/*
function solution(s) {
    let splitS = s.split(' ');
    
    let checkNum = splitS.map(function(str) {
        if (!isNaN(str[0])) {
            return str.toLowerCase();
        } else {
            return str[0].toUpperCase() + str.slice(1).toLowerCase();
        }
    });
    
    return checkNum.join(' ');
}

런타임 에러나는 코드
*/
