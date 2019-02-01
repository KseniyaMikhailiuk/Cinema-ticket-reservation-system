export const addAdditionalService = (item) =>
    fetch(
        "./api/additionalservices",
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
        "./api/additionalservices",
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
