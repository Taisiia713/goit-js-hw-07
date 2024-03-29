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

const listImages = document.querySelector(".gallery");
const listMarkup = images
  .map(
    (image) => `
    <li class="gallery-item">
      <img class="gallery-image" src="${image.url}" alt="${image.alt}" width="360">
    </li>
  `
  )
  .join("");

listImages.insertAdjacentHTML("beforeend", listMarkup);

// images.forEach((image) => {
//   const listItem = document.createElement("li");
//   const img = document.createElement("img");
//   img.src = image.url;
//   img.alt = image.alt;
//   img.classList.add("gallery-item");
//   listItem.append(img);
//   galleryList.append(listItem);
//   img.style.display = "block";
//   img.style.width = "100%";
//   img.style.paddingBottom = "10px";
// });
