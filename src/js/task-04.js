let counterValue = 0;

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector("#value"),
};

refs.decrementBtn.addEventListener("click", onDecrementBtn);
refs.incrementBtn.addEventListener("click", onIncrementBtn);

function onDecrementBtn(event) {
  refs.counter.textContent = counterValue -= 1;
}

function onIncrementBtn(event) {
  refs.counter.textContent = counterValue += 1;
}
