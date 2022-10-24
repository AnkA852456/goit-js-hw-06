function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputNumberEl: document.querySelector('[type="number"]'),
  dataCreateBtn: document.querySelector("[data-create]"),
  dataDestroyBtn: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

let divAmount = 0;
refs.dataCreateBtn.addEventListener("click", createBoxes);
refs.inputNumberEl.addEventListener("input", onInput);
refs.dataDestroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let originalWeightHeight = 30;

  for (let i = 0; i < divAmount; i += 1) {
    const divs = document.createElement("div");
    originalWeightHeight += 10;
    divs.style.width = `${originalWeightHeight}px`;
    divs.style.height = `${originalWeightHeight}px`;
    divs.style.backgroundColor = getRandomHexColor();

    refs.boxesEl.append(divs);
  }
  refs.boxesEl.style.display = "flex";
  refs.boxesEl.style.flexWrap = "wrap";
  refs.boxesEl.style.alignItems = "center";
  refs.boxesEl.style.gap = "15px";
}

function onInput(event) {
  divAmount = event.currentTarget.value;
  return divAmount;
}

function destroyBoxes() {
  refs.boxesEl.textContent = "";
}
