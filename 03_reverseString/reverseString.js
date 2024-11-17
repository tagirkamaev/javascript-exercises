const reverseString = function(phrase) {
    // create loop for each letter in the string
    let result = "";
    for (let i = 0; i <= phrase.length; i++) {
        result += phrase.charAt(phrase.length - i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
