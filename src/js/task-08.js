const refs = {
  formEl: document.querySelector(".login-form"),
  labelEl: document.querySelector("label"),
};

refs.formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("All inputs must be filled!");
    return;
  }

  const credGet = {
    Email: event.currentTarget.elements.email.value,
    Password: event.currentTarget.password.value,
  };
  console.log(credGet);

  refs.formEl.reset();
}
