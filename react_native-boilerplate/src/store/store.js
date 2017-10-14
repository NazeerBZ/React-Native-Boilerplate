import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import { MessageReducer } from './reducers';

const rootReducer = combineReducers({
    MessageReducer
});

const Store = createStore(rootReducer, undefined, compose(applyMiddleware(thunk), autoRehydrate()));
export default Store;