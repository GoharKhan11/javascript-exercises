function roundToOneDecimal (baseInt) {
  /* int -> int
  Rounds baseInt to one decimal place.
  */
  return (Math.round(baseInt * 10) / 10);
}

const ftoc = function(fahrenheitInt) {
  /* int -> int
  Converts fahrenheitInt from fahrenheit to celsius
  */
  let convertedInt = ((fahrenheitInt - 32) * (5/9));
  return roundToOneDecimal(convertedInt);
};

const ctof = function(celsiusInt) {
  /*
  Converts celsiusInt from celsius to fahrenheit
  */
  let convertedInt = ((celsiusInt * (9/5)) + 32);
  return roundToOneDecimal(convertedInt);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
