const inputTextEl = document.querySelector("#validation-input");
const dataLengthEl = document.querySelector('input[data-length="6"]');

inputTextEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  inputTextEl.textContent = event.currentTarget.value;

  if (inputTextEl.textContent.length === Number(dataLengthEl.dataset.length)) {
    inputTextEl.classList.add("valid");
    inputTextEl.classList.remove("invalid");
  } else {
    inputTextEl.classList.add("invalid");
    inputTextEl.classList.remove("valid");
  }
}
