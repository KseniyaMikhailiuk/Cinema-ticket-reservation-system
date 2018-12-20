import {createStore, applyMiddleware} from 'redux'
import cinemaApp from './store/reducers'
import thunk from 'redux-thunk'

const initialState = {
    filterObject: {
        city: "Минск",
        cinema: "",
        date: new Date(),
        filmName: "",
        freeSeats: 0
    },
    filterOptions: {
        filmNames: [],
        cities: []
    },
    selectedFilmInfo: {
        services: [],
    },
    orderList: {
        services: [],
        seats: []
    }
}

const configureStore = () => {
    const middlewares = [thunk];
    const store = createStore(cinemaApp, initialState, applyMiddleware(...middlewares));
    return store;
}

export default configureStore;