import axios from 'axios';
import { useState } from 'react';

function SearchPage() {
    const [searchValue, setSearchValue] = useState('');
    const [imageApiData, setImageApiData] = useState([]);
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
        // do heavy things
        const modifiedKey = e.target.value.replaceAll(' ', '+');
        axios.get(`https://pixabay.com/api/?key=${window._PIXABAYKEY}&q=${modifiedKey}&image_type=photo`)
            .then((res) => {
                console.log(res.data);
            })
        setSearchValue(modifiedKey);
    }, 3000);
    return (
        <div className="">
            <input onChange={(e) => onSearch(e)}></input>
        </div>
    );
}

export default SearchPage;
