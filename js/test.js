// Form Inputs
const inputs = document.querySelectorAll("input");
const errorInputs = document.querySelectorAll(".invalid");
console.log(errorInputs);
let letters = /^[a-zA-Z]/g;

const form = document.getElementById("formCard");
console.log(form);

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
    } 
    // Validating month
    if (inputs[2].value.length > 2 || inputs[2].value > 12) {
      errorInputs[2].innerText = "ingresa un formato valido";
    }
    console.log('The form was submited');
  });
}

validateForm();
export { validateForm };
