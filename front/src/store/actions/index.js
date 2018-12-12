import * as api from '../../services/api/filmsDB'

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
