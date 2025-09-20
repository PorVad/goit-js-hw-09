import"./assets/styles-Dq1NnqdG.js";import{S as t}from"./assets/vendor-CgTBfC_f.js";const i=document.querySelector(".gallery");function o(a){return a.map(({preview:l,original:e,description:r})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img
          class="gallery-image"
          src="${l}"
          alt="${r}"
        />
      </a>
    </li>
  `).join("")}i.innerHTML=o(galleryItems);new t(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=1-gallery.js.map
