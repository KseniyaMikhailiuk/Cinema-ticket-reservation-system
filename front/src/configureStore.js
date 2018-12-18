import {createStore, applyMiddleware} from 'redux'
import cinemaApp from './store/reducers'
import thunk from 'redux-thunk'
import filterOptions from './containers/Schedule/filterOptionsDB'

const initialState = {
    filterObject: {
        "city": filterOptions.cities[0].name,
        "cinema": "",
        "date": new Date()
    }
}

const configureStore = () => {
    const middlewares = [thunk];
    const store = createStore(cinemaApp, initialState, applyMiddleware(...middlewares));
    return store;
} 

export default configureStore;