// Assignment code here

var upperLetter = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
var lowerLetter = "abcdefghijklmopqrstuvwxyz!";
var specialChar = "!#\"$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 
var numChar = "1234567890"
// three conditions of word choices

function getPassword() {
  window.alert("Welcome to Raven Password Inc.")
  var container = "";
  var password = "";
  var wordLength = window.prompt("How many characters would you like in your password?")
  if (wordLength < 8 || wordLength > 128){
    window.alert("length has to be between 8-128 characters")
    getPassword();
  }

  var wordSelection = function(){
    
    
    var confirmUpper = window.confirm("Do you want uppercase letter in your password?");
    if (confirmUpper) {
      container = container.concat(upperLetter);
    }
    var confirmLower = window.confirm("Do you want lowercase letter in your password?");
    if (confirmLower) {
      container = container.concat(lowerLetter);
    }
    var confirmSpecialChar = window.confirm("Do you want Special Characters in your password?");
    if (confirmSpecialChar) {
      container = container.concat(specialChar);
    }
    var confirmNumChar = window.confirm("Do you want Numbers in your password?");
    if (confirmNumChar) {
      container = container.concat(numChar);
    }
    if (container === ""){
      window.alert("Must select one Character Type!")
      wordSelection();
    }

  }

    wordSelection();
    var realLeng = parseInt(wordLength);
    
    for (var i=0; i< realLeng; i++){

      
      var randomNumber = Math.floor(Math.random() * (container.length-1)); 
      password += container.split('')[randomNumber]; 
      
    }
    window.alert("You have sucessfully created a personal secured password!")
  document.getElementById("password").value = password
}
