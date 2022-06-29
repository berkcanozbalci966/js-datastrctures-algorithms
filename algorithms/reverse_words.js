/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const splitedWords = s.split(" ");
  let newSentence = "";

  for (let i = 0; i < splitedWords.length; i++) {
    newSentence +=
      turnReverseWord(splitedWords[i]) +
      (i == splitedWords.length - 1 ? "" : " ");
  }
  return newSentence;
};

function turnReverseWord(word) {
  let newWord = Array.from(word);
  let first = 0;
  let last = newWord.length - 1;

  while (first < last) {
    [newWord[first], newWord[last]] = [newWord[last], newWord[first]];
    first++;
    last--;
  }
  return newWord.join("");
}
