import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');
console.log(list);

const markup = galleryItems.reduce((acc, {
    preview,
    original,
    description
    }) => acc +
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`, '');

// console.log(markup);

list.insertAdjacentHTML('beforeend', markup);
list.addEventListener('click', onImageClick);
list.addEventListener('keydown', onEscapeKeyDown);
let instance;

function onImageClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')){
        return;
    }
    console.log(evt.target.dataset.source);

    instance = basicLightbox.create(`
	  <img src="${evt.target.dataset.source}" >  
    `);
    instance.show();
}

function onEscapeKeyDown(evt) {
    if (evt.code !== 'Escape') {
        return;
    }
    instance.close();
}