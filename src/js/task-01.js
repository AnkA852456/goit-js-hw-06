const categoryListEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoryListEl.children.length}

`);

const itemsEl = document.querySelectorAll(".item");

itemsEl.forEach((item) => {
  const heading = item.querySelector("h2").textContent;
  const count = item.querySelectorAll("ul li").length;
  const text = `Category: ${heading}
Elements: ${count}

`;
  console.log(text);
});
