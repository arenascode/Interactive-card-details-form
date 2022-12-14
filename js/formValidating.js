// Form Inputs
const inputs = document.querySelectorAll("input");
const errorInputs = document.querySelectorAll(".invalid");
let letters = /^[A-Za-z]+$/;
const form = document.getElementById("formCard");


function validateForm() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
   //validating Name
    if (inputs[0].value == "") {
      errorInputs[0].innerText = `Can't be blank`;
      inputs[0].style.borderColor = "#ff5252";
    }

    //Validating input blank Card number
    if (inputs[1].value == "") {
      errorInputs[1].innerText = `Can't be blank`;
      inputs[1].style.borderColor = "#ff5252";
    } if (inputs[1].value.match(letters)) {
      errorInputs[1].innerText = 'Wrong format, numbers only';
       inputs[1].style.borderColor = "#ff5252";
    } if (inputs[1].value !== "" && inputs[1].value.length < 19) {
      errorInputs[1].innerText = "Wrong format, must be 16 numbers";
      inputs[1].style.borderColor = "#ff5252";
    }
    // Validating month
    if (inputs[2].value.length > 2 || inputs[2].value > 12) {
      errorInputs[2].innerText = "Enter a correct date";
      inputs[2].style.borderColor = "#ff5252";
    } if (inputs[2].value == "") {
      errorInputs[2].innerText = `Can't be blank`;
      inputs[2].style.borderColor = "#ff5252";
    }
    // Validating Year 
    if (inputs[3].value.length > 2 || inputs[3].value < 0) {
      errorInputs[2].innerText = "fill correct date";
      inputs[3].style.borderColor = "#ff5252";
    }
    if (inputs[3].value == "") {
      errorInputs[2].innerText = `Can't be blank`;
      inputs[3].style.borderColor = "#ff5252";
    }
    // Validating cvc 
    if (inputs[4].value == "") {
      errorInputs[3].innerText = `Can't be blank`
      inputs[4].style.borderColor = "#ff5252";
    }
    if (inputs[4].value.match(letters)) {
      errorInputs[3].innerText = `Wrong Format, numbers only`;
      inputs[4].style.borderColor = "#ff5252";
    }
    if (inputs[4].value !== "" && inputs[4].value.length < 3) {
      errorInputs[3].innerText = `Wrong Format, must be 3 numbers`;
      inputs[4].style.borderColor = "#ff5252";
    }
    if (errorInputs[0].innerText === '' && errorInputs[1].innerText === '' && errorInputs[2].innerText === '' && errorInputs[3].innerText === '') {
      showFinalMessage()
      console.log("The form was submited");
    }
  });
}

function showFinalMessage() {
  document.getElementById("formContainer").innerHTML = `
  <div class="finalMessage">
  <img src="./images/icon-complete.svg" alt="">
  <h1>THANK YOU!</h1>
  <h3>We've added your card details</h3>
  <button onClick="window.location.reload()"> Continue </button>
  </div>
`;
}


validateForm();
export { validateForm };
