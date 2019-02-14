import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/rootReducer'
import thunk from 'redux-thunk' //import thunk

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk)) // create store sử dụng thunk
  return store
}
