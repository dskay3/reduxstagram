import { createStore, compse } from 'redux';
import { Link } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

// default data so that when app first loads it will load
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments
}

// creates store for data
const store = createStore(rootReducer, defaultState);

// creates history that will be used in the Main component
export const history = syncHistoryWithStore(browserHistory, store);

// exports store
export default store;