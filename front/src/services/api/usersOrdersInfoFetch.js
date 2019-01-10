import * as seancesInfo from './filmsFetch'
import v4 from 'uuid'

const usersOrdersDatabase = [
    {
        userId: 1,
        orderId: 1,
        seanceId: '211',
        orderInfo: {
            seats: [
                {
                    line: 1,
                    raw: 2,
                    type: 'loveseats',
                    price: 20
                },
                {
                    line: 1,
                    raw: 2,
                    type: 'standard',
                    price: 10
                },
                {
                    line: 1,
                    raw: 2,
                    type: 'comfort',
                    price: 15
                }
            ],
            services: [
                {
                    name: 'начос',
                    price: 3
                }
            ]
        }
    },
]

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const addOrder = (orderInfo, orderId, seanceId, userId) =>
    delay(500)
        .then(() => {
            usersOrdersDatabase.push({
                orderId: orderId,
                orderInfo,
                seanceId,
                userId
            });
        })

export const getOrders = (userId) =>
    delay(500)
        .then(() => {
            let userOrders = usersOrdersDatabase.filter(orders => orders.userId === userId);
            return seancesInfo.fetchOrdersInfo(userOrders)
        })