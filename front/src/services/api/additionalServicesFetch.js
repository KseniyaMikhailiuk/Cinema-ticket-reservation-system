import errorAwareFetch from './FetchService/fetchService'
import * as fetchOptions from './FetchService/fetchOptions'

export const addAdditionalService = (item) =>
    errorAwareFetch(
        '/api/additional-services',
        fetchOptions.post({
            Name: item.name
        })
    )

export const getAdditionalServices = () =>
    errorAwareFetch(
        '/api/additional-services',
        fetchOptions.get
    )
        .then(result =>
            result.data
        )
