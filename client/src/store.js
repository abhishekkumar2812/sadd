import { createStore, applyMiddleware, compose } from 'redux'; //applymiddleware needed as thunk is a middleware and it will have to be wrapped around
import thunk from 'redux-thunk';
import rootReducer from './reducers';//index.js
//A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.
//A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to createStore.

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middleware = [thunk]; // what does thunk do?

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)
));

export default store;
