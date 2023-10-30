function solution(n, words) {
  let usedWords = new Set();
  let turn = 0;
  let lastSpell = '';

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let firstSpell = word[0];

    if (i % n === 0) {
      turn++;
    }

    if (usedWords.has(word) || (i > 0 && lastSpell !== firstSpell)) {
      return [(i % n) + 1, turn];
    }

    usedWords.add(word);
    lastSpell = word[word.length - 1];
  }

  return [0, 0];
}
