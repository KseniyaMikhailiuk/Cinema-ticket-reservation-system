import * as api from '../../services/api/filmsFetch'

export const fetchFilmList = (filter) => (dispatch) => {
    dispatch({
        type: 'FETCH_FILM_LIST_REQUEST',
        filter
    })
    return api.fetchFilmList(filter)
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

    return api.fetchFilmInfo(filmName)
        .then(
            response => {
                dispatch({
                    type: 'FETCH_FILM_INFO_SUCCESS',
                    response: response
                })
            }
        )
}
