const sumAll = function(int1, int2) {
    /* int, int -> int
    Adds integers between startInt
    and endInt (inclusive) and returns the sum.
    */

    if ((int1 < 0) || (int2 < 0) || !(typeof int1 == "number") || !(typeof int2 == "number")) {
        return "ERROR";
    }

    // Var to store sum
    let result = 0;
    // Int to start summation at
    let startInt;
    // Int to end summation at
    let endInt;

    // Stores smaller integer in startInt and larger int in endInt
    if (int1 <= int2) {
        startInt = int1;
        endInt = int2;
    }
    else {
        startInt = int2;
        endInt = int1;
    }

    // Goes through integers from startInt to endInt (inclusive)
    for ( let i=startInt; i <= endInt; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
