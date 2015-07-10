var phoneNumber = prompt("Please enter your phone number. (XXX-XXX-XXXX)");

if (phoneNumber.indexOf("-") != 3 && phoneNumber.indexOf("-") != 7) {
  alert("You have not entered your phone with dashes");
}

var birthDate = prompt("Please enter your birth date. (xx/xx/xx)");

if (birthDate.indexOf("/") != 2 && birthDate.indexOf("/") != 5) {
  alert("You have not entered your birth date correctly.");
}
