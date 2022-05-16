import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryList: document.querySelector(".gallery"),
};

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
  <li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
 `;
    })
    .join("");
}

refs.galleryList.innerHTML = createGalleryMarkup(galleryItems);
console.log(galleryItems);

// refs.galleryList.addEventListener("click", onGalleryItemsClick);

// function onGalleryItemsClick(event) {
//   event.preventDefault();

//   if (!event.target.classList.contains("gallery__image")) {
//     return;
//   }

//   openModal();
// }

const options = {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
};

const lightbox = new SimpleLightbox(".gallery a", options);

// function openModal() {
//   const lightbox = new SimpleLightbox(".gallery a", options);
// }

//
