import * as api from '../../services/api/filmsDB'
import { combineReducers } from 'redux';

const getFilteredList = (state = [], action) => {
    switch(action.type){
        case 'FETCH_FILM_LIST':
            return api.fetchFilmList(action.filter);
        default:
            return state;
    }
}


const cinemaApp = combineReducers({getFilteredList});
export default cinemaApp;