// import Notiflix from 'notiflix';
// import 'notiflix/dist/notiflix-3.2.5.min.css';
// import axios from 'axios';
// import getRefs from './get-refs';
// import renderMarkupImageInfo from './markup';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';


// const refs = getRefs();

// const API_KEY = '30081282-1c3fc5ff0122a52a3b21ea25b';
// const BASE_URL = 'https://pixabay.com/api/';

// let perPage = 40;
// let totalHitsOfResponse;
// let totalPageOfResponse;
// let page = 1;


// refs.searchForm.addEventListener('submit', onSearch );

// // ======Бесконечный скролл======
// window.addEventListener('scroll', addMore);
// // ==============================


// async function  onSearch (e) {
//     e.preventDefault();
//     page = 1;
//     let searchQuery = refs.searchInput.value.toLowerCase().trim();
//     try {
//     const URL = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`);

//     if (URL.data.hits.length === 0) {
//         Notiflix.Notify.warning('❌ Sorry, there are no images matching your search query. Please try again.', {
//             timeout: 2000,
//             });
//     } 
//     totalHitsOfResponse = URL.data.totalHits;
//     totalPageOfResponse = Math.floor(totalHitsOfResponse / perPage);
    
    
//     if (URL.data.hits.length > 0) {
//         Notiflix.Notify.success (
//           ` We found ${totalHitsOfResponse} images.`, {
//             timeout: 2000,}
//         )
//         }
        

//         refs.imagesContainer.innerHTML = '';
//         renderMarkupImageInfo(URL.data);
//         page += 1;
//       } catch (error) {
//         console.log(error);
//       }
//     }


//     async function fetchImages() {
//       const searchQuery = refs.searchInput.value;
//       try {
//         const URL = await axios.get(
//           `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
//         );
//         if (URL.data.hits.length === 0 || totalPageOfResponse === page) {
//           Notiflix.Notify.warning("We're sorry, but this is the last page.");
//         }
//         console.log(page);
//         renderMarkupImageInfo(URL.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     function addMore() {
//       if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
//         fetchImages();
//         page += 1;
//       }
//     }

const options = {
  totalItems: 10,
  itemsPerPage: 10,
  visiblePages: 10,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
      '</a>'
  }
};

const pagination = new Pagination('pagination', options);