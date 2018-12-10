import {createStore} from 'redux'
import cinemaApp from './store/reducers'

const configureStore = () => {
    const store = createStore(cinemaApp);
    return store;
} 

export default configureStore;