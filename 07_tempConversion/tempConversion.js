const convertToCelsius = function (tempInFahrenheit) {
  let tempInCelsius = (tempInFahrenheit - 32) * (5 / 9);
  let roundedCelsius = Math.round(tempInCelsius * 10) / 10;
  return roundedCelsius;
};

const convertToFahrenheit = function (tempInCelsius) {
  let tempInFahrenheit = tempInCelsius * (9 / 5) + 32;
  let roundedFahrenheit = Math.round(tempInFahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
