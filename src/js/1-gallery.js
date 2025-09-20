import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Приклад масиву (можеш взяти свій з минулого ДЗ)
const images = [
  {
    preview: "https://placekitten.com/400/250",
    original: "https://placekitten.com/1200/800",
    description: "Cute kitten 1",
  },
  {
    preview: "https://placekitten.com/401/250",
    original: "https://placekitten.com/1201/800",
    description: "Cute kitten 2",
  },
  {
    preview: "https://placekitten.com/402/250",
    original: "https://placekitten.com/1202/800",
    description: "Cute kitten 3",
  },
];

const galleryContainer = document.querySelector(".gallery");
const markup = images
  .map(
    (img) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${img.original}">
      <img class="gallery-image" src="${img.preview}" alt="${img.description}" />
    </a>
  </li>
`
  )
  .join("");

galleryContainer.innerHTML = markup;

// Ініціалізація SimpleLightbox
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
