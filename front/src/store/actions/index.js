import * as filmsInfo from '../../services/api/filmsFetch'
import * as cinemaHallPlans from '../../services/api/hallPlanFetch'
import * as orderInfoFetch from '../../services/api/orderInfoFetch'

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
                    response
                })
            }
        )
        .then(() => {
            filmsInfo.fetchFilterOptions()
            .then(
                response => {
                    dispatch({
                        type: 'FETCH_FILTER_OPTIONS_SUCCESS',
                        response
                    })
                }
            )}
        )
};

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
        seanceId
    })
    return filmsInfo.fetchFilmInfo(seanceId)
        .then(
            response => {
                dispatch({
                    type: 'FETCH_FILM_INFO_SUCCESS',
                    response
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
                    response
                })
            }
        )
}

export const addSeatToOrder = (seatInfo, seanceInfo) => (dispatch) => {
    dispatch({
        type: 'ADD_SEAT_TO_ORDER_REQUEST'
    })
    return filmsInfo.occupySeat({line: seatInfo.line, raw: seatInfo.raw, seanceInfo})
        .then(() =>
                dispatch({
                    type: 'ADD_SEAT_TO_ORDER',
                    seatInfo
                })
        )
}

export const addServiceToOrder = (serviceInfo) => (dispatch) => {
    dispatch({
        type: 'ADD_SERVICE_TO_ORDER',
        serviceInfo
    })
}

export const removeSeatFromOrder = (seatInfo, seanceInfo) => (dispatch) => {
    dispatch({
        type: 'REMOVE_SEAT_FROM_ORDER_REQUEST'
    })
    return filmsInfo.releaseSeat({line: seatInfo.line, raw: seatInfo.raw, seanceInfo})
        .then(() => {
            dispatch({
                type: 'REMOVE_SEAT_FROM_ORDER',
                seatInfo
            })
        })
}

export const removeServiceFromOrder = (serviceId) => (dispatch) => {
    dispatch({
        type: 'REMOVE_SERVICE_FROM_ORDER',
        serviceId
    })
}

export const clearInfo = () => (dispatch) => {
    dispatch({
        type: 'CLEAR_INFO'
    })
}

export const addOrderToDatabase = (orderId, orderInfo, userId) => (dispatch) => {
    dispatch({
        type: 'ADD_ORDER_TO_DATABASE_REQUEST'
    })

    return orderInfoFetch.addOrder(orderId, orderInfo, userId)
        .then(() => {
            dispatch({
                type: 'REQUEST_SUCCEEDED'
            })
        })
}