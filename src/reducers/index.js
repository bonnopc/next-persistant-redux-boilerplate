import homeReducer from "modules/home/reducers"
import { combineReducers } from "redux"

const appReducer = combineReducers({
  home: homeReducer,

  // Add other features here
})

export default appReducer
