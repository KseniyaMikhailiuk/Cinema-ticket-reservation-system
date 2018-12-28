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

export const getAdditionalServices = () =>
    delay(500)
    .then(() => {
        let servicesList = [];
        additionalServices.forEach(service => servicesList.push({value: service.name, label: service.name}));
        return servicesList;
    })
