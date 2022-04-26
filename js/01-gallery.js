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
    const isGalleryActive = e.target.classList.contains('gallery__image');

    if (!isGalleryActive) {
        return;
    }  
    e.preventDefault();
    
    const onKeyboardCloseImg = e => {
        if (e.code === 'Escape') {
            instance.close();
        }
    }
    const instanceEl = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img
    src="${instanceEl}"
    alt="${e.target.alt}"/>`,
        {
            onShow: () => {
                window.addEventListener('keydown', onKeyboardCloseImg)
            },
            onClose: () => {
                window.removeEventListener('keydown', onKeyboardCloseImg)
            },
        
        });
instance.show()
}





console.log(galleryItems);
