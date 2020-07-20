import React from 'react';
import { Link } from 'react-router-dom';
import ItemsIndexIndv from '../items_index/items_index_indv';

class PostIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchItems();
    }

    render() {
        debugger
        const { items } = this.props;
        return (
            <div className="post-index-parent-container">
                <div className="post-index">
                    <div className="post-right-side-container">
                        <ul className="post-right-side">
                            {items &&
                                items.map((item, i) => <ItemsIndexIndv key={i} item={item} />)}
                        </ul>
                    </div>
                    {/* <div className="post-left-side-container">
                        <div className='map-container-div'>
                            <div className="index-head">gear available near you</div>
                            <div>{items && <Map items={items} />}</div>
                        </div>
                    </div> */}
                </div>
                <div className="link-to-search">
                    <Link className='link-to-homepage' to='/'>Looking for something specific?</Link>
                </div>
            </div>
        )
    }
}

export default PostIndex;