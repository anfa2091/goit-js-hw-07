import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//list container selector
const listGallery = document.querySelector(".gallery");

//It is necessary to slightly change the gallery card markup; use this template.
const galleryMarkup = galleryItems
  .map(
    (galleryItems) =>
      `<a class="gallery__item" href="${galleryItems.original}">
      <img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" />
    </a>`
  )
  .join("\n");

  //1. Creating and rendering markup from the galleryItems data array and provided gallery element template. 
//   Use the ready-made code from the first task.
listGallery.insertAdjacentHTML("afterbegin", galleryMarkup);

//3. Library initialization after gallery items are created and added to div.gallery. To do this, read the 
//   SimpleLightbox documentation - first of all, the Usage and Markup sections.
//4. Look in the documentation for the Options section and add image caption display from the alt attribute. 
//   Let the caption be at the bottom and appear 250 milliseconds after image opening.
listGallery.addEventListener("click", (event) => event.preventDefault());

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
 });

