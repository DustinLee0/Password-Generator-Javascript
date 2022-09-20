// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//TO DO
// -prompts password criteria
// -prompts password length: 8-128 characters 
// -prompts character types: lowercase, uppercase, numeric, and/or special characters
// -input checks validation(if statement) then atleast one character type is selected
// password generates
// password is displayed 