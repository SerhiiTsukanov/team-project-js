
import getRefs from './get-refs';
import renderMarkupImageInfo from './renderMarkup';

const refs = getRefs();

const API_KEY = '29400400-14e1219d1dcdc4068cdd8e581';
const BASE_URL = 'https://pixabay.com/api/';

let page = 1;



export default  
async function fetchImages() {
    const searchQuery = refs.searchInput.value;
    try {
      const URL = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
      );
      if (URL.data.hits.length === 0 || totalPageOfResponse === page) {
        Notiflix.Notify.warning("We're sorry, but this is the last page.");
      }
      console.log(page);
      renderMarkupImageInfo(URL.data);
    } catch (error) {
      console.log(error);
    }
  }





























// export default class NewApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     this.totalHitsOfResponse;
//     this.totalPageOfResponse;
//   }

//   fetchImages() {
//     const URL = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;
//     return fetch(URL)
//       .then(response => response.json())
//       .then(({ hits }) => {
//         this.incrementPage();
//         return hits;
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }
  
//   resetPage() {
//     this.page = 1;
//   }
  
//   get query() {
//     return this.searchQuery;
//   }
  
//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }

// }
