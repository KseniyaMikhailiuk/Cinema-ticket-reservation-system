import { combineReducers } from 'redux';
import filterOptions from '../../containers/content/Schedule/filterOptionsDB'


const filteredList = (state = [], action) => {
    switch(action.type){
        case 'FETCH_FILM_LIST_SUCCESS':
            return action.response;
        default:
            return state;
    }
}

const isDataRequested = (state =  false, action) => {
    switch(action.type){
        case 'FETCH_FILM_LIST_REQUEST':
            return true;
        case 'FETCH_FILM_LIST_SUCCESS':
            return false;
        default:
            return state;
    }
}

export const getFilteredList = (state) => {
    return state.filteredList;
}

const initialFilterState = {
    "city": filterOptions.cities[0].name,
    "cinema": "",
    "date": new Date()
}

export const getFilterObject = (state) => {
    if (!state.filterObject){
        state.filterObject = initialFilterState;
    }    
    return state.filterObject
}

const filterObject = (state = null, action) => {
    const {key, value} = action;
    switch(action.type){
        case 'CHANGE_FILTER_OBJECT': 
            return {
                ...state,
                [key]: value
            }
        default:
            return state;
    }
}

const cinemaApp = combineReducers ({
    filteredList,
    filterObject,
    isDataRequested
});

export default cinemaApp;