import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';

const Store = createStore(RootReducer, undefined, compose(applyMiddleware(thunk)));
export default Store;
