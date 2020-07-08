import React from 'react'

class ItemsIndex extends React.Component {
  contstructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchItems()
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

    const { items } = this.props.items;
    return (
      <div className='item-index'>
        <ul>
          { items.map(item => <ItemIndexIndv key={item.id} item={item}/>) }
        </ul>
      </div>
    )
  }
}

export default ItemsIndex