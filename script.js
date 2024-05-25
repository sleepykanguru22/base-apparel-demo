//listning for a submit event
//email input value
//validation
//success condition - change h1 to thank you
//-change p to you're subscribed look out for our content
//hide form
//hide error styling
//error conditon
//show error styling

const form = document.querySelector("form");
const email = document.querySelector("#email");

const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".error-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailValue = email.value;

  if (validateEmail(emailValue)) {
    handleSuccess();
  } else {
    handleError();
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(String(email).toLowerCase());
}

function handleSuccess() {
  hideElement(errorIcon);
  hideElement(errorText);
  hideElement(form);
  document.querySelector("h1").innerText = "Thank you!";
  document.querySelector("p").innerText =
    "You're subscribed. Look out for our centent";
}

function handleError() {
  email.classList.add("error");
  showElement(errorIcon);
  showElement(errorText);
}

function showElement(element) {
  element.style.display = "block";
}
function hideElement(element) {
  element.style.display = "none";
}
