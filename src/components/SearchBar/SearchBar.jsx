import React, {useState} from "react";
import { BsSearch } from "react-icons/bs";

import "./SearchBar.css"
import fetchProducts from "../../api/fetchProducts";

function SearchBar() {

    const [searchValue, setSearchValue] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        
        const products =  await fetchProducts(searchValue);

        console.log(products)
        setSearchValue('')
    }

    return ( 
        <form className="search-bar" onSubmit={handleSearch}>
            <input type="search" placeholder="Buscar produtos" className="search__input"
            value={searchValue}
            required
            onChange={ ({target}) => setSearchValue(target.value)}
            />
            <button type="submit" className="search__button">
                <BsSearch/>
            </button>
        </form>
     );
}

export default SearchBar;