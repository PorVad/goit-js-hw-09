import"./assets/styles-DD3qoKza.js";import{S as e}from"./assets/vendor-CgTBfC_f.js";const i=[{preview:"https://placekitten.com/400/250",original:"https://placekitten.com/1200/800",description:"Cute kitten 1"},{preview:"https://placekitten.com/401/250",original:"https://placekitten.com/1201/800",description:"Cute kitten 2"},{preview:"https://placekitten.com/402/250",original:"https://placekitten.com/1202/800",description:"Cute kitten 3"}],a=document.querySelector(".gallery"),l=i.map(t=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${t.original}">
      <img class="gallery-image" src="${t.preview}" alt="${t.description}" />
    </a>
  </li>
`).join("");a.innerHTML=l;new e(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=1-gallery.js.map
