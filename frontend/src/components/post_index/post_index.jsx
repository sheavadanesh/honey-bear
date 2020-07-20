import React from 'react';
import { Link } from 'react-router-dom';
import ItemsIndexIndv from '../items_index/items_index_indv';
import '../../scss/layout/post_index.scss';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const { items } = this.props;
    return (
        <div className="post-index-parent-container">
            <div className='all-items'>all items</div>
            <div className="post-index">
                <div className="post-right-side-container">
                    <ul className="post-right-side">
                    {items &&
                        items.map((item, i) => <ItemsIndexIndv key={i} item={item} />)}
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default PostIndex;