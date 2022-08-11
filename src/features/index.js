import axios from 'axios';
import { useState } from 'react';
import Loader from '../components/Loader';
import './index.css';

function SearchPage() {
    const [imageApiData, setImageApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    function debounce(func, interval) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, interval || 2000);
        }
    }
    var onSearch = debounce(function (e) {
        if (e.target.value != '') {
            const modifiedKey = e.target.value.replaceAll(' ', '+');
            setIsLoading(true);
            axios.get(`https://pixabay.com/api/?key=${window._PIXABAYKEY}&q=${modifiedKey}&image_type=photo`)
                .then((res) => {
                    setImageApiData(res.data);
                    setIsLoading(false);
                })
        }
        else {
            setImageApiData([]);
        }
    }, 2500);
    return (
        <div className="searchImage-container">
            {isLoading && <Loader></Loader>}
            <h2 className='header-title'>
                Image Search Page
            </h2>
            <div className='search-container'>
                <input className='search-inputField' placeholder='type to search image' onChange={(e) => onSearch(e)}></input>
            </div>
            <div className='image-container'>
                {imageApiData.hits && imageApiData.hits.length > 0 && imageApiData.hits.map((image, index) => {
                    return (
                        <div className='image-div' key={index}>
                            <img className='image-tag' src={image.webformatURL} alt='searchedImage'></img>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SearchPage;
