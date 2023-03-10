import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const documentGallery = document.querySelector('.gallery');
const markup = onCreateGalleryItem(galleryItems);

documentGallery.insertAdjacentHTML('beforeend', markup);

function onCreateGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        alt="${description}" />
      </a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  disableRightClick: true,
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
});
