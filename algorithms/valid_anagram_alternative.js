/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (t.length != s.length) {
    return false;
  }

  let checkAnagram = {};

  for (let i = s.length; i >= 0; i--) {
    if (!checkAnagram[s[i]]) {
      checkAnagram[s[i]] = 1;
      continue;
    }
    checkAnagram[s[i]]++;
  }

  for (let i = 0; i < t.length; i++) {
    if (!checkAnagram[t[i]] || checkAnagram[t[i]] < 1) {
      return false;
    }

    if (checkAnagram[t[i]]) {
      checkAnagram[t[i]]--;
    }
  }

  return true;
};
