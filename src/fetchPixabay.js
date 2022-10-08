

import getRefs from './get-refs';
import renderMarkupImageInfo from './markup';

const refs = getRefs();

var API_KEY = '30081282-1c3fc5ff0122a52a3b21ea25b';
const BASE_URL = 'https://pixabay.com/api/';

let page = 1;

export default  
async function fetchPixabay() {
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