/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let tmp = [];

  for (let i = 1; i < n + 1; i++) {
    let divisibleBy3 = i % 3 === 0;
    let divisibleBy5 = i % 5 === 0;

    if (divisibleBy3 && divisibleBy5) {
      tmp.push("FizzBuzz");
    } else if (divisibleBy3) {
      tmp.push("Fizz");
    } else if (divisibleBy5) {
      tmp.push("Buzz");
    } else {
      tmp.push(String(i));
    }
  }
  return tmp;
};
