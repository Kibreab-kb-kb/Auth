import { createStore } from 'redux';
import rootReducer from './reducers'; // Make sure you have a 'reducers.js' file in the same directory

const store = createStore(rootReducer);

export default store;

 