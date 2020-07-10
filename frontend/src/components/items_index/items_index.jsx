import React from 'react';
import { Link } from 'react-router-dom';
import ItemsIndexIndv from './items_index_indv';
import Map from '../map';
import '../../scss/layout/index_items.scss'

const ItemsIndex = ({ history, items }) => {
  if (items) {
    return (
      <>
      <div className="item-index-parent-container">
        <header className="index-head">gear available near you</header>
        <div className="item-index">
          <div className="items-right-side-container">
            <ul className="items-right-side">
              {items &&
                items.map((item, i) => <ItemsIndexIndv key={i} item={item} />)}
            </ul>
          </div>
          <div className="items-left-side-container">
            {items && <Map items={items} />}
          </div>
        </div>
      </div>
    </>
  )} else {
    return (
      <>
        <div className="item-index-parent-container">
          <div className="item-index">
            <div className="sorry-container">
                <div className='sorry'>
                  Sorry, there are no items matching your search. Please try another search or <Link className='link-to-homepage' to='/'>return to the homepage.</Link>
                </div>
            </div>
          </div>
        </div>
      </>
    )
  };
}

export default ItemsIndex;