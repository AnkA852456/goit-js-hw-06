const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("All inputs must be filled!");
  }

  const cred = {
    Email: event.currentTarget.elements.email.value,
    Password: event.currentTarget.password.value,
  };
  console.log(cred);

  refs.form.reset();
}
