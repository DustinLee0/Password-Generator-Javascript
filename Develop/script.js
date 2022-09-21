// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  // var specialChar = [];

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
  var lowerChar = window.confirm('Would you like to use lower case letters in your password?');
  var upperChar = window.confirm('Would you like to use upper case letters in your password?');
  var numberChar = window.confirm('Would you like to user numbers in your password?');
  var specialChar = window.confirm('Would you like to use special characters in your password?');

  if () {


  }

  return password;
}



// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//TO DO
// -prompts password criteria --> JS popup boxes
// -prompts password length: 8-128 characters 
// -prompts character types: lowercase, uppercase, numeric, and/or special characters
// find how to randomize arrays
// -input checks validation(if statement) then atleast one character type is selected
// password generates
// password is displayed 