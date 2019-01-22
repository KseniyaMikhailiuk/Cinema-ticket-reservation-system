export const registerUser = (userData) =>
    fetch(
        "./api/account/register",
        {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                Name: userData.name,
                Surname: userData.surname,
                Email: userData.email,
                Password: userData.password
            }
        )
    })
    .then(res =>
        res.json()
    )
    .then(data =>
        data
    )

export const authorizeUser = (userData) =>
    fetch(
        "./api/account/login",
        {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                Email: userData.email,
                Password: userData.password
            })
        }
    )
        .then(res =>
            res.json()
        )
        .then(data =>
            data
        )

export const deauthorizeUser = () =>
    fetch(
        "./api/account/logout",
        {
            method: 'post',
        }
    )

export const getUser = () =>
    fetch(
        "./api/account/getUser",
        {
            method: 'get',
            headers: {
                "Content-type": "application/json"
            }
        }
    )
        .then(res =>
            res.json()
        )
        .then(data =>
            data
        )