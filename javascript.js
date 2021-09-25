console.log("connection-test");

alert("use enter key");
//**************************************************************
// summary:

// user input fields constants
// empty text places for errors
// buttons constants
// ENTER KEY press - for results and custom field function
// custom field error handling
// if a percent button correctly clicked
// if custom input have number, the other buttons don't have to have a red border
// tip amount/person result variable
// tip total result variable
// clicked buttons => functions and give results
// error handling for the "bill/persons number" input fields
// the result button
// result button reset function
//**************************************************************


//user input fields constants:
const billInputField = document.getElementById('billInput');
const personsInputField = document.getElementById('personsInput');
const customInputField = document.getElementById('customInput');

//empty text places for errors
const billError = document.getElementById('billInputError');
const personsNumberError = document.getElementById('personInputError');

//buttons constants:
const Btn5 = document.getElementById('btn5percent');
const Btn10 = document.getElementById('btn10percent');
const Btn15 = document.getElementById('btn15percent');
const Btn25 = document.getElementById('btn25percent');
const Btn50 = document.getElementById('btn50percent');


// ENTER KEY press - for results and custom field function
document.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    tipResult.innerHTML = "$" 
   + parseInt((((customInputField.value / 100) * billInputField.value) * 1).toFixed());
   totalResult.innerHTML = "$" 
   + parseInt((((customInputField.value / 100) * billInputField.value) * personsInputField.value).toFixed());
   inputErrorHandling();
   customErrorHandling();
   customFieldHaveNumber();
  } 
});


// custom field error handling
function customErrorHandling() {
  if (customInputField.value == "") {
    customInputField.style.border = "2px solid red";
  } else {
    customInputField.style.border = "2px solid transparent";
  }
}


// if a percent button correctly clicked
function buttonPressed() {
   Btn5.style.border = "none";
   Btn10.style.border = "none";
   Btn15.style.border = "none";
   Btn25.style.border = "none";
   Btn50.style.border = "none";
}


// if custom input have number, the other buttons don't have to have a red border
function customFieldHaveNumber(){
  if (!customInputField.value == "") {
    buttonPressed();
  } else {
   Btn5.style.border = "2px solid red";
   Btn10.style.border = "2px solid red";
   Btn15.style.border = "2px solid red";
   Btn25.style.border = "2px solid red";
   Btn50.style.border = "2px solid red";
  }
}


// tip amount/person result variable
let tipResult = document.getElementById('tipResult');

// tip total result variable
let totalResult = document.getElementById('totalResult');

// clicked buttons => functions and give results
Btn5.addEventListener('click',()=> {
   tipResult.innerHTML = "$" 
   + parseInt(((0.05 * billInputField.value) * 1).toFixed());
   totalResult.innerHTML = "$" 
   + parseInt(((0.05 * billInputField.value) * personsInputField.value).toFixed());
   validate();
  });
Btn10.addEventListener('click',()=> {
   tipResult.innerHTML = "$" 
   + parseInt(((0.1 * billInputField.value) * 1).toFixed());
   totalResult.innerHTML = "$" 
   + parseInt(((0.1 * billInputField.value) * personsInputField.value).toFixed());
   validate();
  });
Btn15.addEventListener('click',()=> {
   tipResult.innerHTML = "$" 
   + parseInt(((0.15 * billInputField.value) * 1).toFixed());
   totalResult.innerHTML = "$" 
   + parseInt(((0.15 * billInputField.value) * personsInputField.value).toFixed());
   validate();
  });
Btn25.addEventListener('click',()=> {
   tipResult.innerHTML = "$" 
   + parseInt(((0.25 * billInputField.value) * 1).toFixed());
   totalResult.innerHTML = "$" 
   + parseInt(((0.25 * billInputField.value) * personsInputField.value).toFixed());
   validate();
  });
Btn50.addEventListener('click',()=> {
   tipResult.innerHTML = "$" 
   + parseInt(((0.5 * billInputField.value) * 1).toFixed());
   totalResult.innerHTML = "$" 
   + parseInt(((0.5 * billInputField.value) * personsInputField.value).toFixed());
   validate();
  });


//error handling for the "bill/persons number" input fields
function inputErrorHandling() {
  function isbillError(){
    if(billInputField.value == ""){
      billInputField.style.border = "2px solid red";
      billError.textContent = "Give the amount!";
      resultsToNull();
    }else{
      billInputField.style.border = "0px solid transparent";
      billError.textContent = "";
    }
  }
  function ispersonError(){
    if(personsInputField.value == ""){
      personsInputField.style.border = "2px solid red";
      personsNumberError.textContent = "Give the number of persons!";
      resultsToNull();
    }else{
      personsInputField.style.border = "0px solid transparent";
      personsNumberError.textContent = "";
    }
  }
  isbillError();  
  ispersonError(); 
}


// all input field error handlings
function validate(){
  customInputField.value = "";
  customInputField.style.border = "2px solid transparent";
  inputErrorHandling();
  buttonPressed();
}

//if a button clicked, don't change the "$0.00" results content
function resultsToNull(){
  tipResult.innerHTML = "$0.00";
  totalResult.innerHTML = "$0.00";
}

// the result button
const resetBtn = document.getElementById('resetBtn');

// result button reset function
resetResults = () => {
tipResult.innerHTML = "$0.00";
totalResult.innerHTML = "$0.00";
billInputField.value = "";
personsInputField.value = "";
customInputField.value = "";
buttonPressed();
};
resetBtn.addEventListener('click', resetResults);



