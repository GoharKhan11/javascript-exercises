const repeatString = function(baseString, repetitions) {
    if (repetitions >= 0) {
        // Create a result string
        let result = "";
        // repeat loop to add basestring to result desired times
        for (let i=0; i < repetitions; i++) {
            result = result + baseString;
        }
        return result;
    }
    else {
        return "ERROR";
    }
}

// Do not edit below this line
module.exports = repeatString;
