import {createStore, applyMiddleware} from 'redux'
import cinemaApp from './store/reducers'
import thunk from 'redux-thunk'

const configureStore = () => {
    const middlewares = [thunk];
    const store = createStore(cinemaApp, applyMiddleware(...middlewares));
    return store;
} 

export default configureStore;