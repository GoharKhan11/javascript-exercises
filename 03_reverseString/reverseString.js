const reverseString = function(baseString) {
    // Break letters of string into array elements
    let baseArray = baseString.split("");
    // Create array to hold reversed letters
    let reverseArray = [];
    // Store number of character being reverse for loop
    let numberOfCharacters = baseArray.length
    // Enter the letters into reverseArray from baseArray
    for (let i=0; i < numberOfCharacters; i++) {
        reverseArray.push(baseArray.pop());
    }
    // Create string using reverseArray
    let result = reverseArray.join("");
    // Return reversed string
    return result;
};

// Do not edit below this line
module.exports = reverseString;
