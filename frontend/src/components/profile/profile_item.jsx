import React from 'react';
import '../../scss/layout/profile_item.scss';

const ProfileItem = ({ item }) => {
    let updatedPrice = (Math.round(item.rate * 100) / 100).toFixed(2);
    return (
        <li className='each-profile-item'>
            <div className='profile-item-index'>
                <div className='profile-left-side'>
                    <div className='profile-photo-cont'>
                        <img className='profile-index-item-photo' src={item.imageUrl} alt="img"></img>
                    </div>
                </div>
                <div className='profile-right-side'>
                    <span className='profile-item-title'>{item.title[0].toUpperCase() + item.title.slice(1)}</span>
                    <span className='profile-item-rate'>${updatedPrice} <span className='profile-per-day'>per day</span></span>
                    <span className='profile-item-category'>{item.category[0].toUpperCase() + item.category.slice(1)}</span>
                    <button className='edit-item' alt='Edit'>Edit</button>
                    <span className='profile-item-description'>
                        <span className='profile-about-head'>About this item</span>
                        <span className='profile-item-description-actual'>{item.description}</span>
                    </span>
                </div>
            </div>
        </li>
    )
};
export default ProfileItem;