/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestSubstring = 0;

  for (let i = 0; i < s.length; i++) {
    let currentStringSet = new Set();

    for (let j = i; j < s.length; j++) {
      if (currentStringSet.has(s[j])) {
        break;
      } else {
        currentStringSet.add(s[j]);
      }
    }

    longestSubstring = Math.max(longestSubstring, currentStringSet.size);
  }

  return longestSubstring;
};
