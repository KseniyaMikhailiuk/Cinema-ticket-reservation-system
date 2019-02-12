import * as HttpStatus from 'http-status-codes'
import SuccessResult from './fetchSuccessResult'
import ErrorResult from './fetchErrorResult'


function redirectAwareFetch (url, options) {
    return errorAwareFetch(url, options)
        .then((result) => {
            switch (result.type) {
                case HttpStatus.UNAUTHORIZED:
                case HttpStatus.FORBIDDEN:
                    window.location.pathname = '/login';
                    break;
                case HttpStatus.INTERNAL_SERVER_ERROR:
                    window.localStorage.pathname = '/schedule';
                    break;
                default:
                    return result;
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function errorAwareFetch (url, options) {

    const MIN_CORRECT_HTTP_STATUS = 200;
    const MAX_CORRECT_HTTP_STATUS = 299;

    if (options) {
        options.credentials = 'same-origin';
    }
    else {
        options = { credentials: 'same-origin' };
    }

    return fetch(url, options)
        .then(response => {
            if (response.status < MIN_CORRECT_HTTP_STATUS || response.status > MAX_CORRECT_HTTP_STATUS){
                return Promise.reject(response);
            }
            return response;
        })
        .then(text =>
            text.json()
        )
        .then(data =>
            new SuccessResult(data))
        .catch(error =>
            new ErrorResult(error.status)
        )
}

export default redirectAwareFetch;