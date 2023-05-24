// Add imports above this line
import { galleryItems } from './gallery-items';

// Add imports above this line
import SimpleLightbox from 'simple-lightbox';
import 'simple-lightbox/dist/simpleLightbox.min.css';
//import SimpleLightbox from 'simple-lightbox/dist/simpleLightbox.min.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

// rendered items
function createGalleryItemsMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`
  }).join('');
}

// use library SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});
