function isAnagram(s, t) {
  const sLettersCount = {};
  const tLettersCount = {};

  const sortedS = Array.from(s).sort().join("");
  const sortedT = Array.from(t).sort().join("");

  for (let i = 0; i < s.length; i++) {
    if (!sLettersCount[sortedS[i]]) {
      sLettersCount[sortedS[i]] = 1;
      continue;
    }
    sLettersCount[sortedS[i]]++;
  }

  for (let j = 0; j < t.length; j++) {
    if (!tLettersCount[sortedT[j]]) {
      tLettersCount[sortedT[j]] = 1;
      continue;
    }
    tLettersCount[sortedT[j]]++;
  }

  const result = JSON.stringify(sLettersCount) == JSON.stringify(tLettersCount);
  return result;
}

console.log(isAnagram("asdfaa", "aasfd"));
