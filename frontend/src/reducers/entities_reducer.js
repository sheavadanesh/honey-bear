import { combineReducers } from 'redux'
import SearchBarReducer from './search_bar_reducer'
import ItemsReducer from './items_reducer.js'

const entitiesReducer = combineReducers({
  items: SearchBarReducer,
  allItems: ItemsReducer
})

export default entitiesReducer