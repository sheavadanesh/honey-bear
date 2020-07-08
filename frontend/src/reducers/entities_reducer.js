import { combineReducers } from 'redux'
import SearchBarReducer from './search_bar_reducer'

const entitiesReducer = combineReducers({
  items: SearchBarReducer,
})

export default entitiesReducer