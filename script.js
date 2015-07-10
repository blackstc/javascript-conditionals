// var phoneNumber = prompt("Please enter your phone number. (XXX-XXX-XXXX)");
//
// if (phoneNumber.indexOf("-") != 3 && phoneNumber.indexOf("-") != 7) {
//   alert("You have not entered your phone with dashes");
// }
//
// var birthDate = prompt("Please enter your birth date. (xx/xx/xx)");
//
// if (birthDate.indexOf("/") != 2 && birthDate.indexOf("/") != 5) {
//   alert("You have not entered your birth date correctly.");
// }

var postalCode = prompt("Please enter your postal code.", "(xxxxx OR xxxxx-xxxx)");

if (postalCode.length === 5) {
  alert("You have correctly entered your postal code!");
} else if (postalCode.length === 10 && postalCode[5] === "-") {
  alert("You have correctly entered your postal code!");
} else {
  alert("You have not entered your postal code correctly");
};
