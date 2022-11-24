import { validateForm } from "./test.js"
// Variables 
const cvcCard = document.getElementById('cvcContent')
const frontCardNumber = document.getElementById('frontCardNumber')
const frontCardName = document.getElementById('frontCardName')
const expireMonthCard = document.getElementById('expireMonth')
const expireYearCard = document.getElementById("expireYear");
// Form Inputs
const inputs = document.querySelectorAll('input')
const errorInputs = document.querySelectorAll(".invalid");


// write in Credit card the values of inputs
inputs.forEach(input => {
  input.addEventListener('keyup', () => {
    //Name Input
    if (inputs[0].value !== '') {
      frontCardName.innerText = inputs[0].value.toUpperCase();
      errorInputs[0].innerText = "";
      inputs[0].style.borderColor = "grey";
    } if (inputs[0].value.length == 0) {
      frontCardName.innerText = 'xxxx xxxxx '
    }
    // cardNumber Input
    if (inputs[1].value !== "") {
      frontCardNumber.innerText = inputs[1].value;
      errorInputs[1].innerText = "";
      inputs[1].style.borderColor = "grey";
    }
    if (inputs[1].value.length == 0) {
      frontCardNumber.innerText = "0000 0000 0000 0000 ";
    }
    //EXP. Month Input
    if (inputs[2].value !== "") {
      expireMonthCard.innerText = inputs[2].value;
      errorInputs[2].innerText = "";
      inputs[2].style.borderColor = "grey";
    }
    if (inputs[2].value.length == 0) {
      expireMonthCard.innerText = "00";
    }
   // EXP. Year Input
    if (inputs[3].value !== "") {
      expireYearCard.innerText = inputs[3].value;
      errorInputs[2].innerText = "";
      inputs[3].style.borderColor = "grey";
    }
    if (inputs[3].value.length == 0) {
      expireYearCard.innerText = "00";
    }
  // CVC Input 
    if (inputs[4].value !== "") {
      cvcCard.innerText = inputs[4].value;
      errorInputs[3].innerText = "";
      inputs[4].style.borderColor = "grey";
    }
    if (inputs[4].value.length == 0) {
      cvcCard.innerText = "000";
    }
  })
})

// Formatting the card number input
inputs[1].addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});


// cardHolderNameInput.oninput = function (e) {
//   frontCardName.innerText = e.target.value.toUpperCase()
// }
// cardNumberInput.onkeydown = function (e) {
//   cardFrontNumber.innerText = e.target.value;
//   let creditCardNumber = parseInt(e.target.value)
//   console.log(typeof creditCardNumber);
  

  // if (Number.isInteger(parseInt(creditCardNumber))) {
  //   console.log("el valor es un numero entero");
  //   console.log(typeof creditCardNumber);
  //   cardFrontNumber.innerText = e.target.value;
  // } else {
  //   console.log("No estás ingresando un numero entero");
  //   e.preventDefault();
  //   // console.log(e.cancelable);
  // }
  // if (e.target.value.length == 4) {
  //   cardFrontNumber.innerText = e.target.value + '/';
  //   console.log(e.target.value);
  // } else if (e.target.value.length == 9) {
  //   cardFrontNumber.innerText = "/" + e.target.value;
  //   console.log(typeof e.target.value);
  // } else {
  //   cardFrontNumber.innerText = e.target.value + 's'
  //   console.log('Jumped the two conditions');
  // }
//}
// cvcInput.oninput = function (e) {
//   console.log(e.target.value);
//   cvcCard.innerText = e.target.value;
// }
// expireMonthForm.oninput = function (e) {
//   expireMonthCard.innerText = e.target.value;
// }
// expireYearForm.oninput = function (e) {
//   expireYearCard.innerText = e.target.value;
// };

// separate the month of the year in front card