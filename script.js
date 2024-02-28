const cardholderName = document.getElementById("cardholder_name");
const cardNumber = document.getElementById("card_number");
const expirationDateMonth = document.getElementById("expiration_date_month");
const expirationDateYear = document.getElementById("expiration_date_year");
const securityCode = document.getElementById("security_code");

const invalidNameMessage = document.getElementById("invalid_name_message");
const invalidNumberMessage = document.getElementById("invalid_number_message");
const invalidExpirationDateMessage = document.getElementById("invalid_expiration_date_message");
const invalidSecurityCodeMessage = document.getElementById("invalid_security_code_message");


cardNumber.addEventListener('keyup', () => {
  let cardNumberValue = cardNumber.value;
  let newValue = '';
   cardNumberValue = cardNumberValue.replace(/\s/g, ''); //replace whitespace with empty string
   for(let i = 0; i<cardNumberValue.length; i++){
    if(i%4 == 0 && i>0){
      newValue = newValue.concat(' ');  //insert a space every 4 digits
    }
    newValue = newValue.concat(cardNumberValue[i]);
    cardNumber.value = newValue;
   }
})


function submitForm(){

  let registeredCardNumberContainer = document.getElementById("registered_number_container");
  let registeredCardholderNameContainer = document.getElementById("registered_name_container");
  let registeredExpirationDateContainer = document.getElementById("registered_expiration_date_container");
  let registeredSecurityCodeContainer = document.getElementById("registered_security_code_container");

  let registeredCardNumber = document.createElement("p");
  let registeredCardholderName = document.createElement("span");
  let registeredExpirationDate = document.createElement("span");
  let registeredSecurityCode = document.createElement("span");

  registeredCardNumber.classList.add("card_front_number");
  registeredCardholderName.classList.add("card_front_details_content");
  registeredExpirationDate.classList.add("card_front_details_content");

  //Validate the cardholder name input
  if(cardholderName.value !== ""){
    if(!containsOnlyNumbers(cardholderName.value)){
      cardholderName.style.border = "1px solid green";
      invalidNameMessage.innerText = "";
    } 
    else { invalidNameMessage.innerText = "Wrong format, letters only"; 
          cardholderName.style.border = "1px solid red";}
  } 
  else { invalidNameMessage.innerText = "Can't be blank"; 
        cardholderName.style.border = "1px solid red";}

  //Validate the card number input
  if(cardNumber.value !== ""){
    if(containsOnlyNumbers(cardNumber.value)){
      if(checkLength(cardNumber.value, 19)){
        cardNumber.style.border = "1px solid green";
        invalidNumberMessage.innerText = "";
      } 
      else { invalidNumberMessage.innerText = "The number is too short"; 
            cardNumber.style.border = "1px solid red"; }
    } 
    else { invalidNumberMessage.innerText = "Wrong format, numbers only"; 
          cardNumber.style.border = "1px solid red";}
  } 
  else { invalidNumberMessage.innerText = "Can't be blank"; 
        cardNumber.style.border = "1px solid red";}

  //Validate the card month expiration date input
  if(expirationDateMonth.value !== ""){
    if(containsOnlyNumbers(expirationDateMonth.value)){
      if(checkLength(expirationDateMonth.value, 2)){
        expirationDateMonth.style.border = "1px solid green";
        invalidExpirationDateMessage.innerText = "";
      } 
      else { invalidExpirationDateMessage.innerText = "The number is too short"; 
            expirationDateMonth.style.border = "1px solid red";}
    } 
    else { invalidExpirationDateMessage.innerText = "Wrong format, numbers only"; 
          expirationDateMonth.style.border = "1px solid red";}
  } 
  else { invalidExpirationDateMessage.innerText = "Can't be blank"; 
        expirationDateMonth.style.border = "1px solid red";}

  //Validate the card year expiration date input
  if(expirationDateYear.value !== ""){
    if(containsOnlyNumbers(expirationDateYear.value)){
      if(checkLength(expirationDateYear.value, 2)){
        expirationDateYear.style.border = "1px solid green";
        invalidExpirationDateMessage.innerText = "";
      } 
      else { invalidExpirationDateMessage.innerText = "The number is too short"; 
            expirationDateYear.style.border = "1px solid red";}
    } 
    else { invalidExpirationDateMessage.innerText = "Wrong format, numbers only"; 
          expirationDateYear.style.border = "1px solid red";}
  } 
  else { invalidExpirationDateMessage.innerText = "Can't be blank"; 
        expirationDateYear.style.border = "1px solid red";}

  //Validate the card security code input
  if(securityCode.value !== ""){
    if(containsOnlyNumbers(securityCode.value)){
      if(checkLength(securityCode.value, 3)){
        securityCode.style.border = "1px solid green";
        invalidSecurityCodeMessage.innerText = "";
      } 
      else { invalidSecurityCodeMessage.innerText = "The number is too short"; 
            securityCode.style.border = "1px solid red";}
    } 
    else { invalidSecurityCodeMessage.innerText = "Wrong format, numbers only"; 
          securityCode.style.border = "1px solid red";}
  } 
  else { invalidSecurityCodeMessage.innerText = "Can't be blank"; 
        securityCode.style.border = "1px solid red";}
        
  //Check if all inputs are valid
  if(cardholderName.style.border == "1px solid green" && cardNumber.style.border == "1px solid green" && expirationDateMonth.style.border == "1px solid green" && expirationDateYear.style.border == "1px solid green" && securityCode.style.border == "1px solid green"){
    registeredCardholderName.innerText = cardholderName.value;
    registeredCardNumber.innerText = cardNumber.value;
    registeredExpirationDate.innerText = expirationDateMonth.value + "/" + expirationDateYear.value;
    registeredSecurityCode.innerText =  securityCode.value;

    registeredCardNumberContainer.appendChild(registeredCardNumber);
    registeredCardholderNameContainer.appendChild(registeredCardholderName);
    registeredExpirationDateContainer.appendChild(registeredExpirationDate);
    registeredSecurityCodeContainer.appendChild(registeredSecurityCode);

    const fromContainer = document.getElementById("form_container");
    const completeStateContainer = document.getElementById("complete_state_container");
    fromContainer.style.display = "none";
    completeStateContainer.style.display = "flex";


  }
}

function containsOnlyNumbers(inputValue) {
  return /^(\d+ )*(\d+)$/.test(inputValue); 
}

function checkLength(inputValue, number) {
  return inputValue.length === number;
}

