

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validate() {

  const result = document.getElementById("result");
  const email = document.getElementById("email").value;
  console.log(email);
  result.value = "";

  if (validateEmail(email)) {
    console.log("Valid Email");
    result.innerText = email + " is valid, an email will be sent with access instructions";
    result.style.color = "#54E6AF";
  } else {
    console.log("Invalid Email");
    result.innerText = "Oops! Please check your email";
    result.style.color = "#FB3E3E";
    
  }
  return false;
}

document.getElementById("validate").addEventListener("click", function(event){
  event.preventDefault();
  validate();
});