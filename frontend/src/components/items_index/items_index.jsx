import React from 'react';
import { Link } from 'react-router-dom';
import ItemsIndexIndv from './items_index_indv';
import Map from '../map';
import '../../scss/layout/index_items.scss'

const ItemsIndex = ({ items }) => {
    return (
      <div className="item-index-parent-container">
        <div className="item-index">
          <div className="items-right-side-container">
            <ul className="items-right-side">
              {items &&
                items.map((item, i) => <ItemsIndexIndv key={i} item={item} />)}
            </ul>
          </div>
          <div className="items-left-side-container">
            <div className='map-container-div'>
              <div className="index-head">gear available near you</div>
              <div>{items && <Map items={items} />}</div>
            </div>
          </div>
        </div>
        <div className="link-to-search">
          <Link className='link-to-homepage' to='/'>Looking for something else?</Link>
        </div>
      </div>
    );
}

export default ItemsIndex;