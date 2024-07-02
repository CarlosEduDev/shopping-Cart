import React from 'react';
import propTypes from 'prop-types';

import formatCurrency from '../../utils/formatCurrency';

import { FaCartPlus } from "react-icons/fa";

import './ProductCard.css'

// eslint-disable-next-line react/prop-types
function ProductCard({ data }) {

    // eslint-disable-next-line react/prop-types
    const {title, thumbnail, price} = data;

    return ( 
        <section className='product-card'>
            <img 
            // eslint-disable-next-line react/prop-types
            src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} 
            alt="product" 
            className='card__image'/>

            <div className='card__infos'>
                <h2 className='card__price'>{formatCurrency(price, 'BRL')}</h2>
                <h2 className='card__title'>{title}</h2>
            </div>

            <button type='button' className='button__add-cart'>
                <FaCartPlus/>
            </button>
        </section>
     );
}

export default ProductCard;

ProductCard.prototype = {
    data: propTypes.shape({}),
}.isRequired