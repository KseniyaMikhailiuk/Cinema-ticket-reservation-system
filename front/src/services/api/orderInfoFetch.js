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