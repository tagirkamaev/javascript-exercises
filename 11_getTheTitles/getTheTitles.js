const getTheTitles = function (array) {
  // iterate through objects of array
  let titles = array.map((item) => item.title);
  // find the title of the object
  // return the title
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
