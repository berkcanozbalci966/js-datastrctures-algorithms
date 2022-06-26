var reverseWords = function (s) {
  const splitedWords = splitStringWithChar(s, " ");
};

function splitStringWithChar(string, char) {
  let tmp = [];
  decomposition(0, string, char, tmp);
}

function decomposition(start, fullstring, char, tmp) {
  for (let i = start; i < fullstring.length; i++) {
    if (fullstring[i] == char) {
      const newWord = wordCollector();
      tmp.push();
    }
  }
}

function wordCollector(start, end, string) {
  let word = "";
  for (let i = start; i < end; i++) {
    word += string[i];
  }
}

reverseWords("Let's take LeetCode contest");
