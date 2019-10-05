import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
const initialState = {}
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
)
export default store;