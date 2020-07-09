import * as APIUtil from '../util/search_bar_util';

export const RECEIVE_ITEM = "RECEIVE_ITEM"

export const receiveItem = item => {
  debugger
  return{
  type: RECEIVE_ITEM,
  item
}}

export const search = item => dispatch => {
  debugger
  return (
    APIUtil.search(item)
      .then(item => {
        debugger
        return dispatch(receiveItem(item))}
    ) 
  )
}
//Not sure if this is how it works with axios
//Add errors