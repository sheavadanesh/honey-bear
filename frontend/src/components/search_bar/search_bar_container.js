import { connect } from "react-redux"
import SearchBar from './search_bar'
import Splash from '../splash'
import { search } from '../../actions/search_bar_actions'
import React from 'react'

const mSTP = state => {
  debugger
  return {
    search: {
      title: '',
    },
  }
}

const mDTP = dispatch => {
  debugger
  return {
    search: item => dispatch(search(item))
  }
}


export default connect(mSTP, mDTP)(SearchBar)

//Do we need a mSTP???