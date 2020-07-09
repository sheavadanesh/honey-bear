import React from 'react';
import ItemsIndexIndv from './items_index_indv';
import Map from '../map';
import search_item from '../search_bar/search_bar';
import '../../scss/layout/index_items.scss'

// class ItemsIndex extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     this.setState()
//   }

//   //Bring this in when there is a borrow checkout page route
//   // borrowButton() {
//   //   if(this.props.session) {
//   //     return (
//   //       <div className="borrow-button-contianer">
//   //         <Link to="/borrow" className="borrow-button-link">
//   //           <h6 className="borrow-button">Borrow</h6>
//   //         </Link>        
//   //       </div>
//   //     )
//   //   }
//   // }

//   render () {
//     if(!this.props.items) return null

//     const { items } = this.props;
//     
//     return (
//       <div className='item-index'>
//         <ul>
//           { items.map((item, i) => <ItemsIndexIndv key={i} item={item}/>) }
//         </ul>
//       </div>
//     )
//   }
// }

const ItemsIndex = ({ items }) => {
  return (
    <div className="item-index-parent-container">
      <span>{search_item.title} near you</span>
      <div className='item-index'>
        <div className="items-right-side-container">
          <ul className="items-right-side">
            { items && items.map((item, i) => <ItemsIndexIndv key={i} item={item}/>) }
          </ul>
        </div>
        <div className="items-left-side-container">
          <Map/>
        </div>
      </div>
    </div>
  )
}

export default ItemsIndex