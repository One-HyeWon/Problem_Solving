function solution(msg) {
  let answer = [];
  let dictionary = new Map();
  for (let i = 1; i <= 26; i++) {
    dictionary.set(String.fromCharCode(64 + i), i);
  }

  let w = '';
  let c = '';

  for (let i = 0; i < msg.length; i++) {
    c = msg[i];
    let wc = w + c;
    if (dictionary.has(wc)) {
      w = wc;
    } else {
      answer.push(dictionary.get(w));
      dictionary.set(wc, dictionary.size + 1);
      w = c;
    }
  }

  answer.push(dictionary.get(w));
  return answer;
}
