export const get = {
    method: 'get',
    headers: {
        'Accept': 'application/json'
    }
}

export const post = (body) => {
    return {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    }
}