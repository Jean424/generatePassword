function generatePassword(){
    ////TODO: Assigning Variables
    var length = prompt("The length of passwords must be at least 8 and no more than 128")
   
    var upperletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerletters = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var specials = '!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~';
    
    while (!(Number.isInteger(Number(length)) && length >= 8 && length<= 128)) {
      length = prompt("The length of passwords must be at least 8 and no more than 128");
    }

    var useLowercase = confirm("Would you like your password contain lowercase letters")
    var useUpperCase = confirm("Would you like your password contain uppercase letters")
    var useNumbers = confirm("Would you like your password contain numbers")
    var usespecials = confirm("Would you like your password contain special characters")

    var password = '';
    var validChars = '';

    if (useLowercase) {
      validChars += lowerletters;
    }
    if (useUpperCase) {
      validChars += upperletters;
    }
    if (useNumbers) {
      validChars += numbers;
    }
    if (usespecials) {
      validChars += specials;
    }

    if (validChars === '') {
      return 'You must comfirm at least one type of character. Try Again!'
    }

    var generatePassword = '';

    for (var i = 0; i < length; i++) {
      var index = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars[index];
    }
    return generatePassword;
  }

  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");
  
  // // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    }
  // // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
