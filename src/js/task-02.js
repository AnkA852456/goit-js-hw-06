const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const makeList = (ingredients) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredients;
  liEl.classList.add("item");

  return liEl;
};

const elements = ingredients.map(makeList);
ingredientsEl.append(...elements);

console.log(elements);
