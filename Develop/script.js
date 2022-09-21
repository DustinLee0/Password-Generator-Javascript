// Assignment Code
var generateBtn = document.querySelector("#generate");

//creates random integer
//if statement defines if max isnt declared, min to max range is = 0 to min
function randomInt (min, max) {
  if (!max) {
    max = min;
    min = 0;
  }

  var random = Math.random();
  return Math.floor(min*(1 - random) + random*max);
}

//creates random number to grab value from specified list array
function randomGenerator (list) {
  return list[randomInt(0, list.length)];
}

function generatePassword() {
  //window.prompt opens a window for the user to input a value to be stored in a var
  var userInputPassword = window.prompt("How many characters would you like your password to contain?");

  //parseInt forces the value to be a number.
  var passLength = parseInt(userInputPassword);

  //isNan is a command that checks if the variable passLength is a numeric value type
  //window.alert prompts an alert window
  if(isNaN(passLength)) {
    window.alert('That is not a numeric value. Please try again.');
  } else if (passLength < 8 || passLength > 128) {
    window.alert('Password length must be between 8 - 128 characters.');
  } 

  //window.confirm returns boolean value depending on what was clicked (click "OK" --> returns true  || click "Cancel" --> returns false)
  var lowerChar = window.confirm('Would you like your password to contain lowercase letters?');
  var upperChar = window.confirm('Would you like your password to contain uppercase letters?');
  var numberChar = window.confirm('Would you like your password to contain numbers?');
  var specialChar = window.confirm('Would you like your password to contain special characters?');

  var lowercaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numericList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var specialCharList = ['!', '@', '#', '$', '%', '^', '&', '*'];

  var userPasswordCriteria = [];
  
//use push, pop, splice to make a variable with truthy criteria to call upon which list/lists to use
// if window.confirm variables return true, execute code  (can also be written as "(lowerChar === true)")
if (lowerChar) {
  userPasswordCriteria.push(lowercaseList);
  }
if (upperChar) {
  userPasswordCriteria.push(uppercaseList);
  }
if (numberChar) {
  userPasswordCriteria.push(numericList);
  }
if (specialChar) {
  userPasswordCriteria.push(specialCharList);
  }
// This if statement defaults the chosen list to numbers if nothing is chosen. 
if (userPasswordCriteria.length === 0) {
  userPasswordCriteria.push(numericList);
}

// this section of code is for if no parameters are chosen. the window will pop an alert asking for a minimum of 2 parameters but it was not part of acceptance criteria
// if(lowerChar === false && upperChar === false && numberChar === false && specialChar === false) {
//   window.alert('Your password must contain at least two different data sets. Please choose one: Lowercase, uppercase, numbers, special characters.')
// }

var passwordResult = '';

  //this for loops adds truthy lists to a variable to be called upon later to generate password
  for (var i = 0; i < passLength; i++) {
    var randomList = randomGenerator(userPasswordCriteria);
    var randomCharGenerator = randomGenerator(randomList);
    passwordResult += randomCharGenerator;
    // console.log(randomCharGenerator);
    // console.log(passwordResult);
  }

  return passwordResult;
}


// Write password to the #password input
function writePassword() {
var passwordResult = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = passwordResult;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//TO DO
// ✔️ -prompts password criteria --> JS popup boxes
// ✔️ -prompts password length: 8-128 characters 
// ✔️ -prompts character types: lowercase, uppercase, numeric, and/or special characters
// ✔️ find how to randomize arrays
//Math.random(); chooses random value from 0-1 --> decimal value
//need to make sure random function outputs a integer, NOT decimal
// -input checks validation(if statement) then atleast one character type is selected
// password generates
// password is displayed 