import {createStore, applyMiddleware} from 'redux'
import cinemaApp from './store/reducers'
import {preloadInitialState} from './store/actions'
import thunk from 'redux-thunk'
import moment from 'moment'


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
        seatsInfo: [],
        services:[],
        dateTime: moment()
    },
    orderList: {
        services: [],
        seats: []
    },
    userInfo: {
        id: 1,
    },
    isLoading: false,
    isRequestSucceeded: false,
    isAdmin: false,
    isLoggedIn: false
}

const configureStore = () => {
    const middlewares = [thunk];
    const store = createStore(cinemaApp, initialState, applyMiddleware(...middlewares));
    preloadInitialState(store.dispatch);
    return store;
}

export default configureStore;