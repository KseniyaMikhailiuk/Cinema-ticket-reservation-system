import {createStore, applyMiddleware} from 'redux'
import cinemaApp from './store/reducers'
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
    isRequestSucceeded: false,
    isAdmin: false,
    isLoggedIn: false,
    language: "ru"
}

const configureStore = () => {
    const middlewares = [thunk];
    const store = createStore(cinemaApp, initialState, applyMiddleware(...middlewares));
    return store;
}

export default configureStore;