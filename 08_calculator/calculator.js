const add = function(int1, int2) {
	/* int, int -> int
  Adds int1 and int2, returns result.
  */
 return (int1 + int2);
};

const subtract = function(int1, int2) {
	/* int, int -> int
  Subtracts int2 from int1, returns result.
  */
  return (int1 - int2);
};

const sum = function(baseArray) {
	/* array -> int
  Returns sum of all elements in baseArray
  */
  let result = 0;
  for (let i=0; i < baseArray.length; i++) {
    result += baseArray[i];
  }
  return result;

};

const multiply = function(baseArray) {
  /* array -> int
  Returns product of all elements in baseArray
  */
  let result = 1;
  for (let i=0; i < baseArray.length; i++) {
    result *= baseArray[i];
  }
  return result;
};

const power = function(baseInt, raiseValue) {
	/* int, int -> int
  Returns baseInt to the power raiseValue
  */
  return (baseInt ** raiseValue);
};

const factorial = function(baseInt) {
	/* int -> int
  Returns the factorial of baseInt if it exists
  */

  // Return Error if input is negative
  if (baseInt < 0) {
    return "ERROR";
  }

  // Return 1 if input is 0
  // Factorial of 0 is 1
  else if (baseInt == 0) {
    return 1;
  }

  // If input is greater than 0
  else {
    // Var to store result
    // Starts at 1 because factorial of number more than 1 can't
    // be less than 1 and starting 0 doesn't change when multiplied.
    let result = 1;
    // Loop decreasing baseInt each iteration while baseInt > 1 
    while (baseInt > 1) {
      // Multiply result by current baseInt value
      result *= baseInt;
      // Reduces baseInt
      baseInt--;
    }
    return result;
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
