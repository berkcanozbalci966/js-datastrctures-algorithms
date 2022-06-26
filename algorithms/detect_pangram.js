function isPangram(string) {


    const partedString = string.split(" ");

    for (let i = 0; i < partedString.length; i++){
        for (let j = 0; j < partedString[i].length; i++){
              if (Number(partedString[i][j]) != NaN) {
            return false
        }

        }
      
    }


  if (partedString.length != 1) {
    for (let f = 0; f < partedString.length; f++) {
      const word = partedString[f];
      const includes = [];
      let stringWithNoSpace = "";

      for (let i = 0; i < word.length; i++) {
        if (word[i] != " " && word[i] !== ",") {
          stringWithNoSpace += word[i];
        }
      }

      for (let i = 0; i < stringWithNoSpace.length; i++) {
        if (!hasInArray(stringWithNoSpace[i], includes)) {
          includes.push(stringWithNoSpace[i]);
        }
      }

      if (includes.length != stringWithNoSpace.length) {
        return false;
      }
    }
  } else {
      let includes = []
      for (let i = 0; i < string.length; i++){
          if (!hasInArray(string[i], includes)) {
              includes.push(string[i])
          }

      }
       if (string.length != includes.length) {
          return false
      }
    }
    
  return true;
}

function hasInArray(string, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === string) {
      return true;
    }
  }
  return false;
}


console.log(isPangram("abcdefghijklmopqrstuvwxyz"))