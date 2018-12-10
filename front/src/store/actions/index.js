import * as api from '../../services/api/filmsDB'

export const fetchFilmList = (filter = new Date()) => ({
        type: "FETCH_FILM_LIST",
        filter
    });

