const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const makeGalleryEL = ({ url, alt }) => {
  return `
  <li>
  <img src="${url}" alt="${alt}" />
  </li>
  `;
};

const galleryEl = document.querySelector(".gallery");

const makeGalleryList = images.map(makeGalleryEL).join(" ");

galleryEl.insertAdjacentHTML("afterbegin", makeGalleryList);

galleryEl.style.display = "flex";
galleryEl.style.flexWrap = "wrap";
galleryEl.style.gap = "40px";
galleryEl.style.justifyContent = "center";
galleryEl.style.alignItems = "center";
galleryEl.style.listStyle = "none";

const imageEl = document.querySelectorAll("img");
console.log(imageEl);
imageEl.forEach((img) => (img.style.width = "90vw"));
