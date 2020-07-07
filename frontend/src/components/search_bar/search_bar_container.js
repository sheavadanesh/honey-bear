import {connect} from "react-redux"
import SearchBar from './search_bar'
import {search} from '../../actions/search_bar_actions'
import React from 'react'

const mDTP = dispatch => ({
  search: item => dispatch(search(item))
})


export default connect(null, mDTP)(SearchBar)

//Do we need a mSTP???