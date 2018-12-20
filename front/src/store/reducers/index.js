import { combineReducers } from 'redux';

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

export const getOrderInfo = (state) => {
    return state.orderList;
}

export const getFilterOptions = (state) => {
    return state.filterOptions;
}

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

const hallPlan = (state = [], action) => {
    switch(action.type){
        case 'FETCH_HALL_INFO_SUCCESS':
            return action.response;
        default:
            return state;
    }
}

const filterObject = (state = {}, action) => {
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

const orderList = (state = [], action) => {
    switch(action.type){
        case 'ADD_SEAT_TO_ORDER':
            return [...state, action.seatInfo];
        case 'REMOVE_SEAT_FROM_ORDER':
            return state.filter(seat => !(seat.line == action.seatInfo.line && seat.raw == action.seatInfo.raw));
        default:
            return state;
    }
}

const filterOptions = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_FILTER_OPTIONS_SUCCESS':
            return action.response;
        default:
            return state;
    }
}

const cinemaApp = combineReducers ({
    filteredList,
    filterObject,
    isDataRequested,
    selectedFilmInfo,
    hallPlan,
    orderList,
    filterOptions,
});

export default cinemaApp;