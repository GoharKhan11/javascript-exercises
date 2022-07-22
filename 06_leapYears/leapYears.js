const leapYears = function(testYear) {
    /* int -> bool
    Returns true if the testYear is a leap year,
    else returns false. */

    if ((testYear%4 != 0) || (testYear%100 == 0 && testYear%400 != 0)) {
        return false;
    }
    else {return true;}
};

// Do not edit below this line
module.exports = leapYears;
