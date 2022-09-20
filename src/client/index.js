//import methods from js files
import {countDown} from './js/countDown';
import {inputValidation} from './js/countDown';
import {getDataGeonames} from './js/geonamesApi';
import {getApiKeyPixabay} from './js/pixabayApi';
import {fetchDataPixabay} from './js/pixabayApi';
import {postData} from './js/postData';
import {init} from './js/submitHandler';
import {constructData} from './js/submitHandler';
import { updateUI } from './js/updateUI';
import { getApiKeyWeatherbit } from './js/weatherbitApi';
import { fetchDataWeatherbit } from './js/weatherbitApi';

//import image
import myImage from './media/bee-3607595_640.jpg';

// import style
import './styles/style.scss';
import './styles/box1.scss';
import './styles/box2.scss';
import './styles/box3.scss';
import './styles/box4.scss';

alert('Welcome!')

// Call init on DOMContentLoaded event.
window.addEventListener('DOMContentLoaded', init);

export {
    countDown,
    inputValidation,
    getDataGeonames,
    getApiKeyPixabay,
    fetchDataPixabay,
    postData,
    init,
    constructData,
    updateUI,
    getApiKeyWeatherbit,
    fetchDataWeatherbit,
    myImage
}