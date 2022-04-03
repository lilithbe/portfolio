import { combineReducers } from 'redux'
//redux-devtools-extension redux-logger redux-thunk
//react-redux redux
/* 리듀서 목록 */
import authReducer from './auth/Reducer'
const rootReducer = combineReducers({
  authData:authReducer,

})

export default rootReducer