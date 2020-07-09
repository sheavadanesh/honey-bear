import React from 'react';
import '../../scss/layout/index_item_indv.scss';

const ItemsIndexIndv = ({ item }) => {
    let updatedPrice = (Math.round(item.rate * 100) / 100).toFixed(2);
    return (
        <li className='each-index-item'>
            <div className='item-index-indv'>
                <div className='left-side'>
                    <div className='photo-cont'>
                        <img className='index-item-photo' src={item.imageUrl}></img>
                    </div>
                </div>
                <div className='right-side'>
                    <span className='index-item-title'>{item.title[0].toUpperCase() + item.title.slice(1)}</span>
                    <span className='index-item-rate'>${updatedPrice} <span className='per-day'>per day</span></span>
                    <span className='index-item-category'>{item.category[0].toUpperCase() + item.category.slice(1)}</span>
                    <button className='rent-now'>Rent Now</button>
                    <span className='index-item-description'>
                        <span className='about-head'>About this item</span>
                        <span className='item-description-actual'>{item.description}</span>
                    </span>
                </div>
            </div>
        </li>
    )
};

export default ItemsIndexIndv;