import { galleryItems } from './gallery-items.js';
// Change code below this line
const createGalleryMarkup = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

createGalleryMarkup.insertAdjacentHTML('beforeend', galleryMarkup);
createGalleryMarkup.addEventListener('click', onGalleryClick)


function createGalleryItems(items) {
    return items
        .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
        })
    .join('')
};

function onGalleryClick(e) {
    const isGalleryActive = e.target.classList.contains('gallery__link');

    if (!isGalleryActive) {
        return;
    }  
    e.prevenDefault();

    if (e.code === 'Escape') {
        lightbox.close();  //разобраться в этом.
    }
}



console.log(galleryItems);
