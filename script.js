// Assignment Code
var generateBtn = document.querySelector("#generate");

var UserpasswordLength;
var testLower;
var testUpper;
var testNumeric;
var testSpecialCharacter;
var userSelection;

var lowerCasePrompt = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasePrompt = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericPrompt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacterPrompt = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

function generatePassword() {
  // Ask four user Input
  UserpasswordLength = prompt("How many characters do you want your password to be, it must be between 8 and 128");
  console.log("Password length " + UserpasswordLength);

  if(!UserpasswordLength) {
    alert("Required value");

  } else if (UserpasswordLength < 8 || UserpasswordLength > 128) {
    UserpasswordLength = prompt("You must choose a number that is between 8 and 128");
    console.log("Password length " + UserpasswordLength);

  } else { 
    testLower = confirm("Do you want lower case letters?");
    console.log("Lower case " + testLower);
    testUpper = confirm("Do you want upper case letters?");
    console.log("Upper case " + testUpper);
    testNumeric = confirm("Do you want numeric values?");
    console.log("Number " + testNumeric);
    testSpecialCharacter = confirm("Do you want special characters?");
    console.log("Special Character " + testSpecialCharacter);

  };

  // No answer then
  if (!testLower && !testUpper && !testNumeric && !testSpecialCharacter) {
    userSelection = alert("You must choose a criteria");
  // 4 true options
  } else if (testLower && testUpper && testNumeric && testSpecialCharacter) {
    userSelection = lowerCasePrompt.concat(upperCasePrompt, numericPrompt, specialCharacterPrompt);
    console.log(userSelection);
  }
  // 3 true options
  else if (testLower && testUpper && testNumeric) {
    userSelection = lowerCasePrompt.concat(upperCasePrompt, numericPrompt);
    console.log(userSelection);
  }
  else if (testLower && testUpper && testSpecialCharacter) {
    userSelection = lowerCasePrompt.concat(upperCasePrompt, specialCharacterPrompt);
    console.log(userSelection);
  }
  else if (testLower && testNumeric && testSpecialCharacter) {
    userSelection = lowerCasePrompt.concat(numericPrompt, specialCharacterPrompt);
    console.log(userSelection);
  }
  else if (testUpper && testNumeric && testSpecialCharacter) {
    userSelection = upperCasePrompt.concat(numericPrompt, specialCharacterPrompt);
    console.log(userSelection);
  }
  // 2 true options
  else if (testLower && testUpper) {
    userSelection = lowerCasePrompt.concat(upperCasePrompt);
    console.log(userSelection);
  }
  else if (testLower && testNumeric) {
    userSelection = lowerCasePrompt.concat(numericPrompt);
    console.log(userSelection);
  }
  else if (testLower && testSpecialCharacter) {
    userSelection = lowerCasePrompt.concat(specialCharacterPrompt);
    console.log(userSelection);
  }
  else if (testUpper && testNumeric) {
    userSelection = upperCasePrompt.concat(numericPrompt);
    console.log(userSelection);
  }
  else if (testUpper && testSpecialCharacter) {
    userSelection = upperCasePrompt.concat(specialCharacterPrompt);
    console.log(userSelection);
  }
  else if (testNumeric && testSpecialCharacter) {
    userSelection = numericPrompt.concat(specialCharacterPrompt);
    console.log(userSelection);
  }
  // 1 true option
  else if (testLower) {
    userSelection = lowerCasePrompt;
    console.log(userSelection);
  }
  else if (testUpper) {
    userSelection = blankUpper.concat(upperCasePrompt);
    console.log(userSelection);
  }
  else if (testNumeric) {
    userSelection = numericPrompt;
    console.log(userSelection);
  }
  else if (testSpecialCharacter) {
    userSelection = specialCharacterPrompt;
    console.log(userSelection);
  };

  // Empty variable for the password lenght
  var passwordBlank = [];

  for (var i =0; i < UserpasswordLength; i++) {
    var randIndex = userSelection[Math.floor(Math.random() * userSelection.length)];
    passwordBlank.push(randIndex)
    console.log(randIndex)
  }

  // TODO: return the generated password
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // hello
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//PLEASE REFERENCE READ ME FOR PSUEDO CODE