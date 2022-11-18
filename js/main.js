// Variables 

const cvcCard = document.getElementById('cvcContent')
const cardFrontNumber = document.getElementById('frontCardNumber')
const frontCardName = document.getElementById('frontCardName')
const expiredDateCard = document.getElementById('expireDate')
// Form Inputs
const cardHolderNameInput = document.getElementById('buyerName');
const cardNumberInput = document.getElementById('cardNumber')
const expireMonth = document.getElementById("expireMonth")
const expireYear = document.getElementById("expireYear")
const cvcInput = document.getElementById('cvcInput')

cardHolderNameInput.oninput = function (e) {
  frontCardName.innerText = e.target.value
}
cardNumberInput.oninput = function (e) {
  cardFrontNumber.innerText = e.target.value
}
cvcInput.oninput = function (e) {
  console.log(e.target.value);
  cvcCard.innerText = e.target.value;
}
expireMonth.oninput = function (e) {
  expiredDateCard.innerText = e.target.value;
}
// separate the month of the year in front card