import * as api from '../../services/api/filmsDB'

export const fetchFilmList = (filters) => (dispatch, getState) =>{
    dispatch({
        type: "FETCH_FILM_LIST",
        filters
    });
}
