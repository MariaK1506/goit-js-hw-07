import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryList: document.querySelector(".gallery"),
  itemLink: document.querySelector(".gallery__link"),
};
// 1 вариант

// const markupGallery = ({ preview, original, description }) => {
//   //   object = { preview, original, description };
//   return `
//   <div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>
// `;
// };
// const addMarkup = galleryItems.map(markupGallery).join("");
// refs.galleryList.insertAdjacentHTML("afterbegin", addMarkup);
// console.log(galleryItems);

//
// 2 вариант

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
 `;
    })
    .join("");
}

const itemMarkup = createGalleryMarkup(galleryItems);
refs.galleryList.insertAdjacentHTML("afterbegin", itemMarkup);

console.log(galleryItems);

// 3 вариант

// const markupGallery = galleryItems
//   .map(
//     ({ preview, original, description }) => `
//   <div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>
//  `
//   )
//   .join("");
// refs.galleryList.insertAdjacentHTML("afterbegin", markupGallery);
// console.log(galleryItems);

refs.galleryList.addEventListener("click", onGalleryItemsClick);
// refs.itemLink.addEventListener("click", (event) => event.preventDefault());

function onGalleryItemsClick(event) {
  event.preventDefault();
  //   console.log(event.target.nodeName);

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(event.target.dataset.source);
  //
}
