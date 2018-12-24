var additionalServices = [
    {
        name: 'начос',
        price: 3
    },
    {
        name: 'cola',
        price: 2
    }
]

export default additionalServices;

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const addAdditionalService = (item) =>
    delay(500)
    .then(() => {
        additionalServices.push(item);
    })