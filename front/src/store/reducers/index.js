import * as api from '../../services/api/filmsDB'

const createList = (filters) => {
    const getFilteredList = (state = [], action) => {
        switch(action.type){
            case 'FETCH_FILM_LIST':
                return api.fetchFilmList(filters);
        }
    } 
}