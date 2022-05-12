import { createStore } from 'react-redux'
import user from './reducers/user'
const userReducer = user;
const store = createStore(userReducer);
window.store = store;
export default store;
