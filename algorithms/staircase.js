function staircase(n) {
    for (let i = 0; i < n ; i++) {
      
      let string = "";
      
      for (let k = 0; k < n - i - 1; k++){
          
          string += " ";
      }

    for (let j = 0; j < i+1; j++) {
      string += "#";
      }
      
    console.log(string);
  }
}

staircase(3)
