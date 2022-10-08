
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import getRefs from './get-refs';

const refs = getRefs();


export default function  renderMarkupImageInfo (galleryItems) {
  const renderGallary =  galleryItems.hits.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => {
    return `
    <a class="photo-card_link" href=${largeImageURL}>
<div class="photo-card post">
  <div class ="photo-thumb"> 
    <img src=${webformatURL} alt=${tags} loading="lazy"/>
    </div>
    <div class="info">
      <p class="info-item">
        <b>Likes:</b> <span>${likes}</span>
      </p>
      <p class="info-item">
        <b>Views:</b> <span>${views}</span>
      </p>
      <p class="info-item">
        <b>Comments:</b> <span>${comments}</span>
      </p>
      <p class="info-item">
        <b>Downloads:</b> <span>${downloads}</span>
      </p>
    </div>
  </div>
  </a>
    `;
  }).join("");

  refs.imagesContainer.insertAdjacentHTML('beforeend', renderGallary);
  gallery.refresh();
}



const gallery = new SimpleLightbox(".gallery a", {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  showCounter: false,
  nextOnImageClick: true,
  scrollZoom: false,
});



