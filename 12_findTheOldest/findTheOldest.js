const findTheOldest = function (array) {
  const currentYear = new Date().getFullYear();

  array.forEach((person) => {
    if (person.yearOfDeath) {
      person.age = person.yearOfDeath - person.yearOfBirth;
    } else {
      person.age = currentYear - person.yearOfBirth;
    }
  });

  const oldestPerson = array.sort((a, b) => b.age - a.age)[0];
  return oldestPerson;
};
// Do not edit below this line
module.exports = findTheOldest;
