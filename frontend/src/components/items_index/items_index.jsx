import React from 'react';
import ItemsIndexIndv from './items_index_indv';

class ItemsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  //Bring this in when there is a borrow checkout page route
  // borrowButton() {
  //   if(this.props.session) {
  //     return (
  //       <div className="borrow-button-contianer">
  //         <Link to="/borrow" className="borrow-button-link">
  //           <h6 className="borrow-button">Borrow</h6>
  //         </Link>        
  //       </div>
  //     )
  //   }
  // }

  render () {
    if(!this.props.items) return null

    const { items } = this.props;
    debugger
    return (
      <div className='item-index'>
        <ul>
          { items.map((item, i) => <ItemsIndexIndv key={i} item={item}/>) }
        </ul>
      </div>
    )
  }
}

export default ItemsIndex