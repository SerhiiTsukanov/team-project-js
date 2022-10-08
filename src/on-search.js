// import getRefs from './get-refs';
// // import axios from 'axios';

const API_KEY = '29400400-14e1219d1dcdc4068cdd8e581';
const BASE_URL = 'https://pixabay.com/api/';

// const refs = getRefs();
let page = 1;
let perPage = 39;


export default 

async function  onSearch (e) {
    e.preventDefault();
  
    try {
    const searchQuery = refs.searchInput.value.toLowerCase().trim();

    const URL = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`);

    if (URL.data.hits.length === 0) {
        Notiflix.Notify.failure('❌ Sorry, there are no images matching your search query. Please try again.', {
            timeout: 2000,
            });
            totalHitsOfResponse = URL.data.totalHits;
            totalPageOfResponse = Math.floor(totalHitsOfResponse / perPage);
    } else (URL.data.hits.length > 0) {
        Notiflix.Notify.success (
          ` We found ${totalHitsOfResponse} images.`, {
            timeout: 2000,
            }
        ),
      
        // } else {
        //     (URL.data.hits.length === 0 || totalPageOfResponse === page) 
        //         Notiflix.Notify.warning("We're sorry, but this is the last page.", {
        //             timeout: 2000,
        //             });              
        // }

        refs.imagesContainer.innerHTML = '';
        renderMarkUp(URL.data);
        page += 1;
      } catch (error) {
        console.log(error);
      }
    }