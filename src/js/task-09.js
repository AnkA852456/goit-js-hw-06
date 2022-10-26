function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  spanEl: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
  bodyEl: document.querySelector("body"),
};

console.log(refs.changeColorBtn);

refs.changeColorBtn.addEventListener("click", onchangeColorBtn);

function onchangeColorBtn(event) {
  refs.spanEl.textContent = refs.bodyEl.style.backgroundColor =
    getRandomHexColor();
}
