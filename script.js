let cardholderName = document.getElementById("cardholder_name");
let cardNumber = document.getElementById("card_number");
let expirationDateMonth = document.getElementById("expiration_date_month");
let expirationDateYear = document.getElementById("expiration_date_year");
let securityCode = document.getElementById("security_code");

function submitForm(){
  let registeredNumberContainer = document.getElementById("registered_number_container");
  
  let registeredNumber = document.createElement("p");
  registeredNumber.innerText = cardNumber.value;
  registeredNumber.classList.add("card_front_number");
  
  registeredNumberContainer.appendChild(registeredNumber);

}