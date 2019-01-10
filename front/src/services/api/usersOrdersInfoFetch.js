import * as seancesInfo from './filmsFetch'

const usersOrdersDatabase = []
const ordersDatabase = []

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const addOrder = (orderInfo, seanceId, userId) =>
    delay(500)
        .then(() => {
            usersOrdersDatabase.push({
                orderId: orderInfo.orderId,
                seanceId,
                userId
            });
            ordersDatabase.push(orderInfo);
        })

export const getOrders = (userId) =>
    delay(500)
        .then(() => {
            let userOrders = usersOrdersDatabase.filter(orders => orders.userId === userId);
            seancesInfo.fetchOrdersInfo(userOrders)
                .then(response => {

                    return response
                })
        })