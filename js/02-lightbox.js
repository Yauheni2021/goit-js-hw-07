import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGalleryItems = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

createGalleryItems.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
    return items
        .map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    })
    .join('')

}




const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    docClose: false

 });

lightbox.on('show.simplelightbox', (e) => e.preventDefault());







console.log(galleryItems);
