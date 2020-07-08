import React from 'react'

class ItemsIndex extends React.Component {
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
    if(!this.props.posts) return null

    const items = this.props.items.map(item => {
      
    })
    return (
      <div>
        Items here
      </div>
    )
  }
}

export default ItemsIndex