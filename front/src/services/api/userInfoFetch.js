import errorAwareFetch from './FetchService/fetchService'
import * as fetchOptions from './FetchService/fetchOptions'

export const registerUser = (userData) =>
    errorAwareFetch(
        '/api/account/register',
        fetchOptions.post({
            Name: userData.name,
            Surname: userData.surname,
            Email: userData.email,
            Password: userData.password
        })
    )
        .then(result =>
            result.data
        )

export const authorizeUser = (userData) =>
    errorAwareFetch(
        '/api/account/login',
        fetchOptions.post({
            Email: userData.email,
            Password: userData.password
        })
    )
        .then(result =>
            result.data
        )

export const deauthorizeUser = () =>
    errorAwareFetch(
        '/api/account/logout',
        {
            method: 'post',
        }
    )

export const getUser = () =>
    errorAwareFetch(
        '/api/account/getUser',
        fetchOptions.get
    )
        .then(result =>
            result.data
        )