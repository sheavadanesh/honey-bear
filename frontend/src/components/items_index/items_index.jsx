import React from 'react';
import ItemsIndexIndv from './items_index_indv';
import Map from '../map';
import '../../scss/layout/index_items.scss'
import { Redirect } from 'react-router-dom';

const ItemsIndex = ({ items }) => {
    return (
      <>
        {!items && <Redirect />}
        <div className="item-index-parent-container">
          <span className="index-head">Gear available near you</span>
          <div className="item-index">
            <div className="items-right-side-container">
              <ul className="items-right-side">
                {items &&
                  items.map((item, i) => <ItemsIndexIndv key={i} item={item} />)}
              </ul>
            </div>
            <div className="items-left-side">
              {items && <Map items={items} />}
            </div>
          </div>
        </div>
      </>
    );
}

export default ItemsIndex