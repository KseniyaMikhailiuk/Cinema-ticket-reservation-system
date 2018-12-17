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

export const changeFilterObjectItem = (key, value) => (dispatch) => {
    return dispatch({
        type: 'CHANGE_FILTER_OBJECT',
        key,
        value
    })
}

export const fetchFilmInfo = (filmName) => (dispatch) => {
    dispatch({
        type: 'FETCH_FILM_INFO_REQUEST',
        title: filmName
    })

    return filmsInfo.fetchFilmInfo(filmName)
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