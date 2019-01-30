var additionalServices = [
    {
        id: 1,
        name: 'начос',
        price: 3
    },
    {
        id: 2,
        name: 'cola',
        price: 2
    }
]

export default additionalServices;

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const addAdditionalService = (item) =>
    fetch(
        "./api/additionalservices/addadditionalservice",
        {
            method: 'post',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Name: item.name
            })
        }
    )
        .then(response =>
            response.ok
            ? response.json()
            : false)
        .then(data =>
            data
        )
        .catch(error => {
            console.log(error);
            throw error;
        })

export const getAdditionalServices = () =>
    fetch(
        "./api/filterlist/getServiceOptions",
        {
            method: 'get',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json'
            }
        }
    )
        .then(response =>
            response.ok
            ? response.json()
            : false)
        .then(data =>
            data)
        .catch(error => {
            console.log(error);
            throw error;
        })
