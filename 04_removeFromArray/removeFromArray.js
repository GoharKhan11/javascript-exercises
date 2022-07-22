const removeFromArray = function(baseArray, ...removeElements) {
    /* array, rest parameters -> array
    Returns an array which is the original input array lacking the
    undesired elements passed as additional arguments.
    Note: does not modify original array.
    */

    let baseArrayLength = baseArray.length;

    // Array containing all elements from baseArray except the undersired ones
    let resultArray = [];

    // Create variable to store current baseArray element as we loop through baseArray
    let currentElement;

    // Loop through the baseArray, use i as the current element index
    for (let i=0; i < baseArrayLength; i++) {
        // Store baseArray element at index i
        currentElement = baseArray[i];
        // Add currentElement to resultArray unless it is in removeElements
        if ( !removeElements.includes( currentElement ) ) {
            resultArray.push(currentElement);
        }
    }

    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
