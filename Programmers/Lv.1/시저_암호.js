function solution(s, n) {
  const charArray = s.split('');
  const answer = charArray.map((c, index) => {
    const shiftedCharCode = s.charCodeAt(index) + n;
    if (65 <= s.charCodeAt(index) && s.charCodeAt(index) <= 90) {
      return String.fromCharCode(((shiftedCharCode - 65) % 26) + 65);
    } else if (97 <= s.charCodeAt(index) && s.charCodeAt(index) <= 122) {
      return String.fromCharCode(((shiftedCharCode - 97) % 26) + 97);
    }
    return c;
  });
  return answer.join('');
}
