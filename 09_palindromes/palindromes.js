const palindromes = function (str) {
  // converting string to lowerCase not to use register
  let lowerStr = str.toLowerCase();

  // converting string to array of symbols
  let symbols = lowerStr.split("");

  // filtering out punctuation marks and spaces
  let letters = symbols.filter(
    (item) => item != " " && item != "," && item != "." && item != "!"
  );

  // converting array back to string
  let cleanedStr = letters.join("");

  // creating a reversed string by turning str to array, reversing and joining it
  let reversedStr = cleanedStr.split("").reverse().join("");

  // returning true or false
  return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
