function checkBrackets(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      const top = stack.pop();
      if ((char === ')' && top !== '(') || (char === ']' && top !== '[') || (char === '}' && top !== '{')) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function rotateBrackets(s) {
  return s.slice(1) + s[0];
}

function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    s = rotateBrackets(s);
    if (checkBrackets(s)) {
      answer++;
    }
  }

  return answer;
}
