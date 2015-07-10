var phoneNumber = prompt("Please enter your phone number. (XXX-XXX-XXXX)");

if (phoneNumber.indexOf("-") != 3 && phoneNumber.indexOf("-") != 7) {
  alert("You have not entered your phone with dashes");
}
