
import { createStore, compose, applyMiddleware } from 'redux';	
import rootReducer from '../reducers';

import comments from '../middleware/comments';

// == Enhancers	
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;	

const enhancers = composeEnhancers(
  applyMiddleware(
    comments
  ),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
