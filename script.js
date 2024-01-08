// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {

    // define array that will contain the characteristic of the password (length, if it has special char,...)
    var passwordChoices = [];

    // creating a condition to restart if condition is not met
    var condition1 = true;
    while (condition1 === true) {
      // asking user to chose the length of the password and convert it to integer
      var lengthPassword = parseInt(
        prompt("The password should have between 8 and 128 characters, and at least one of the character types. How many characters should the password have?")
      );
      console.log("The password is "+lengthPassword+" characters long");
      // check if the length of the password is correct , if yes, add the value to "passwordChoice"
      if (lengthPassword >= 8 && lengthPassword <= 128) {
        passwordChoices.push(lengthPassword);
        condition1 = false;
      } else {
        alert("Your choice is not respecting the requested criteria. Let's start again.");
      }
    }

    //  create another conditional to assertain that at least a password characteristic has been chosen
    var condition2 = true;
    while (condition2 === true){
    //  use input asked for choices regarding password characters
    var choiceSpecChar = confirm("Do you want the password to have special characters?");
    var choiceNumber = confirm("Do you want to have numbers?");
    var choiceLowerLetters = confirm("Do you want to have lower case letters?");
    var choiceUpperLetters = confirm("Do you want to have upper case letters?");
    if ((choiceSpecChar===true) || (choiceNumber===true) || (choiceLowerLetters===true) || (choiceUpperLetters===true)){
      passwordChoices.push(choiceSpecChar);
      passwordChoices.push(choiceNumber);
      passwordChoices.push(choiceLowerLetters);
      passwordChoices.push(choiceUpperLetters);
      condition2 = false;
     } else {
      alert("You have to choose at least one of the password criteria. Let's start again:")
     }
    }
    return passwordChoices
  }

var finalPasswordChoices = getPasswordOptions();
console.log("the array with user choices: "+finalPasswordChoices); // the result is an array like [length, true, true, true, false]

// Function to create an array of characters accepted for the password
function createArrayChosenChar() {
  var allChosenCharacters = []
  if (finalPasswordChoices[1] ===true) {
    allChosenCharacters=allChosenCharacters.concat(specialCharacters);
  } else {console.log("Special characters are omitted from password");}
  if (finalPasswordChoices[2] ===true) {
    allChosenCharacters=allChosenCharacters.concat(numericCharacters);
  } else {console.log("Numeric characters are omitted from password");}
  if (finalPasswordChoices[3] ===true) {
    allChosenCharacters=allChosenCharacters.concat(lowerCasedCharacters);
  } else {console.log("Lower case chhracters are omitted from password");}
  if (finalPasswordChoices[4] ===true) {
    allChosenCharacters=allChosenCharacters.concat(upperCasedCharacters);
  } else {console.log("Upper case characters are omitted from password");}
  return allChosenCharacters
}

var finalArrayWithChar = createArrayChosenChar();
// finalArrayWithChar = finalArrayWithChar.join('')  //convert array to a single string of characters
console.log(finalArrayWithChar);
console.log("length of password: "+finalPasswordChoices[0]);

var generatedPassword = [];
// Function for getting a random element from an array , and creating the password
function getRandom(arr) {
  for (i=0 ; i<=finalPasswordChoices[0]; i++) {
    console.log(arr);
    console.log("array length is "+arr.length);
    var randomIndex = Math.floor(Math.random()*arr.length);
    console.log(randomIndex);
    var passwordElement = arr[randomIndex];
    console.log(passwordElement);
    generatedPassword.push(passwordElement);
    console.log(generatedPassword);
  }
  return generatedPassword
}
var passwordFinal = getRandom(finalArrayWithChar)
console.log(passwordFinal);

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = passwordFinal.join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
