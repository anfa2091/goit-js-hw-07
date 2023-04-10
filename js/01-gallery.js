import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
//Create a gallery with the ability to click on its items and view full size images in a modal window

//gallery container selector
const containerGallery = document.querySelector(".gallery");

//1. Creating and rendering markup from the galleryItems data array and provided gallery item template.
//The link to the original image must be stored in the source data attribute on the <img> element and specified in
//the link's href. Do not add any HTML tags or CSS classes other than those in this template.
const galleryMarkup = galleryItems
  .map(
    (galleryItems) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${galleryItems.original}">
      <img
        class="gallery__image"
        src="${galleryItems.preview}"
        data-source="${galleryItems.original}"
        alt="${galleryItems.description}"
      />
    </a>
  </div>`
  )
  .join("\n");

//2. Implementing delegation to div.gallery and getting the url of a large image.
containerGallery.insertAdjacentHTML("afterbegin", galleryMarkup);

//4. Opening a modal window by clicking on a gallery item. To do this, check out the documentation and examples.
//image selector listener
containerGallery.addEventListener("click", selectOriginalImage);


//Please note that the image is wrapped in a link, which means that, when clicked, the user will be redirected to
//another page by default. Disable this behavior by default.
//Add modal window closing upon pressing the Escape key. Make keyboard listening available only while the modal
//window is open. In the basicLightbox library, there is a method to close the modal window programmatically.
//5. Replacing the value of the src attribute of the <img> element in a modal window before opening. Use the ready-made
//   modal window markup with the image from the examples of the basicLightbox library.
//image selector 
function selectOriginalImage(event) {
  event.preventDefault();
  if(event.target.nodeName !== "IMG"){
    return;
  }
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
  instance.show();

  containerGallery.addEventListener("keydown", (event) => {
    if(event.code === "Escape"){
        instance.close();
    }
  });
}
