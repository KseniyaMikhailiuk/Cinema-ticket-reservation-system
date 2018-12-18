import * as filmsInfo from '../../services/api/filmsFetch'
import * as cinemaHallPlans from '../../services/api/hallPlanFetch'

export const fetchFilmList = (filter) => (dispatch) => {
    dispatch({
        type: 'FETCH_FILM_LIST_REQUEST',
        filter
    })
    return filmsInfo.fetchFilmList(filter)
        .then(
            response => {
                dispatch({
                    type: 'FETCH_FILM_LIST_SUCCESS',
                    response: response,
                })
            }
        );
};

export const fetchFilterOptions = () => (dispatch) => {
    return filmsInfo.fetchFilterOptions()
        .then(
            response => {
                dispatch({
                    type: 'FETCH_FILTER_OPTIONS_SUCCESS',
                    response: response
                })
            }
        )
}

export const changeFilterObjectItem = (key, value) => (dispatch) => {
    return dispatch({
        type: 'CHANGE_FILTER_OBJECT',
        key,
        value
    })
}

export const fetchFilmInfo = (seanceId) => (dispatch) => {
    dispatch({
        type: 'FETCH_FILM_INFO_REQUEST',
        seanceId: seanceId
    })
    return filmsInfo.fetchFilmInfo(seanceId)
        .then(
            response => {
                dispatch({
                    type: 'FETCH_FILM_INFO_SUCCESS',
                    response: response
                })
            }
        )
}

export const fetchHallPlan = (seanceInfo) => (dispatch) => {
    dispatch({
        type: 'FETCH_HALL_INFO_REQUEST',
        seanceInfo: seanceInfo
    })

    return cinemaHallPlans.fetchHallPlan(seanceInfo)
        .then(
            response => {
                dispatch({
                    type: 'FETCH_HALL_INFO_SUCCESS',
                    response: response
                })
            }
        )
}

export const addSeatToOrder = (seatId, seanceInfo) => (dispatch) => {
    dispatch({
        type: 'ADD_SEAT_INFO_REQUEST'
    })

    return cinemaHallPlans.occupySeat(seatId, seanceInfo)
        .then(
            response => 
                dispatch({
                    type: 'ADD_SEAT_TO_ORDER',
                    seatInfo: response
                })
        )
} 