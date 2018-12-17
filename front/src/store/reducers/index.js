import { combineReducers } from 'redux';

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
        case 'FETCH_FILM_INFO_REQUEST':
        case 'FETCH_FILM_LIST_REQUEST':
            return true;
        case 'FETCH_FILM_INFO_SUCCESS':
        case 'FETCH_FILM_LIST_SUCCESS':
            return false;
        default:
            return state;
    }
}

export const getFilteredList = (state) => {
    return state.filteredList;
}

export const getFilterObject = (state) => { 
    return state.filterObject
}

export const getFilmInfo = (state) => {
    return state.selectedFilmInfo;
}

export const getHallPlan = (state) => {
    return state.hallPlan
}

const hallPlan = (state = [], action) => {
    switch(action.type){
        case 'FETCH_HALL_INFO_SUCCESS':
            return action.response;
        default:
            return state;
    }
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

const selectedFilmInfo = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_FILM_INFO_SUCCESS':
            return action.response
        default:
            return state;
    }
}

const cinemaApp = combineReducers ({
    filteredList,
    filterObject,
    isDataRequested,
    selectedFilmInfo,
    hallPlan
});

export default cinemaApp;