import { combineReducers } from 'redux'
import SearchBarReducer from './search_bar_reducer'
import ItemsReducer from './items_reducer.js'
import ProfileReducer from './ profile_reducer'

const entitiesReducer = combineReducers({
  items: SearchBarReducer,
  allItems: ItemsReducer,
  user: ProfileReducer
})

export default entitiesReducer