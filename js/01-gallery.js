import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryList: document.querySelector(".gallery"),
};

let instance;

// 1 задание
// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

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

// refs.galleryList.insertAdjacentHTML(
//   "afterbegin",
//   createGalleryMarkup(galleryItems)
// );

refs.galleryList.innerHTML = createGalleryMarkup(galleryItems);

console.log(galleryItems);

// 2 задание
// Реализация делегирования на div.gallery и получение url большого изображения.

refs.galleryList.addEventListener("click", onGalleryItemsClick);

function onGalleryItemsClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const largeImg = event.target.dataset.source;
  openModal(largeImg);
}

// 4 задание
// Открытие модального окна по клику на элементе галереи.Для этого ознакомься с документацией и примерами.
// 5 задание
// Замена значения атрибута src элемента < img > в модальном окне перед открытием.Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

function openModal(img) {
  instance = basicLightbox.create(`
    <img src="${img}" width=1280">
`);
  instance.show();
  window.addEventListener("keydown", onEscapeKeyPress);
}

// Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно.

function onEscapeKeyPress(event) {
  if (event.code === "Escape") {
    // console.log("escape");
    instance.close();
    window.removeEventListener("keydown", onEscapeKeyPress);
  }
}
