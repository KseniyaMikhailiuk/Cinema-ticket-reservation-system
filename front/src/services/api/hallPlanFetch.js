import {v4} from 'uuid'

const cinemaHallPlans = [
    {
        cityName: "Минск",
        cinemas: [
            {
                name: "Арена сити",
                halls: [
                    {
                        number: 1,
                        plan: [
                            [
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 1,
                                    line: 1,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 2,
                                    line: 1,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 3,
                                    line: 1,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 4,
                                    line: 1,
                                },
                                {
                                    id: v4(),
                                    type: "comfort",
                                    raw: 5,
                                    line: 1,
                                },
                            ],
                            [
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 2,
                                    line: 2,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 3,
                                    line: 2,
                                },
                                {
                                    id: v4(),
                                    type: "comfort",
                                    raw: 4,
                                    line: 2,
                                },
                                {
                                    id: v4(),
                                    type: "comfort",
                                    raw: 5,
                                    line: 2,
                                },
                            ],
                            [
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 1,
                                    line: 3,
                                },
                                {
                                    id: v4(),
                                    type: "loveseat",
                                    raw: 2,
                                    line: 3,
                                },

                                {
                                    id: v4(),
                                    type: "loveseat",
                                    raw: 3,
                                    line: 3,
                                },
                            ]
                        ]
                    },
                    {
                        number: 2,
                        plan: [
                            [
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 1,
                                    line: 1,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 2,
                                    line: 1,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 3,
                                    line: 1,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 4,
                                    line: 1,
                                },
                                {
                                    id: v4(),
                                    type: "comfort",
                                    raw: 5,
                                    line: 1,
                                },
                            ],
                            [
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 2,
                                    line: 2,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 3,
                                    line: 2,
                                },
                                {
                                    id: v4(),
                                    type: "comfort",
                                    raw: 4,
                                    line: 2,
                                },
                                {
                                    id: v4(),
                                    type: "comfort",
                                    raw: 5,
                                    line: 2,
                                },
                            ],
                            [
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 1,
                                    line: 3,
                                },
                                {
                                    id: v4(),
                                    type: "loveseat",
                                    raw: 2,
                                    line: 3,
                                },

                                {
                                    id: v4(),
                                    type: "loveseat",
                                    raw: 3,
                                    line: 3,
                                },
                            ]
                        ]
                    }
                ]
            },
            {
                name: "Аврора",
                halls: [
                    {
                        number: 1,
                        plan: [
                            [
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 1,
                                    line: 1,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 2,
                                    line: 1,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 3,
                                    line: 1,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 4,
                                    line: 1,
                                },
                                {
                                    id: v4(),
                                    type: "comfort",
                                    raw: 5,
                                    line: 1,
                                },
                            ],
                            [
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 2,
                                    line: 2,
                                },
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 3,
                                    line: 2,
                                },
                                {
                                    id: v4(),
                                    type: "comfort",
                                    raw: 4,
                                    line: 2,
                                },
                                {
                                    id: v4(),
                                    type: "comfort",
                                    raw: 5,
                                    line: 2,
                                },
                            ],
                            [
                                {
                                    id: v4(),
                                    type: "standard",
                                    raw: 1,
                                    line: 3,
                                },
                                {
                                    id: v4(),
                                    type: "loveseat",
                                    raw: 2,
                                    line: 3,
                                },

                                {
                                    id: v4(),
                                    type: "loveseat",
                                    raw: 3,
                                    line: 3,
                                },
                            ]
                        ]
                    }
                ]
            }
        ]
    }
]

export default cinemaHallPlans;

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchHallPlan = (seanceInfo) =>
    delay(500)
        .then(() => {
            var plan = []
            cinemaHallPlans
            .forEach(city => {
                if (city.cityName === seanceInfo.city) {
                    city
                        .cinemas
                        .forEach(cinema => {
                            if (cinema.name === seanceInfo.cinema) {
                                cinema
                                    .halls
                                    .forEach(hall => {
                                        if (hall.number === seanceInfo.hall) {
                                            plan = hall.plan;
                                        }
                                    })
                            }
                        })
                }
            })
            return plan;
        })

export const addCinema = (cinemaInfo) =>
    fetch(
        '/api/cities',
        {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                Name: cinemaInfo.city
            })
        }
    )
        .then(response =>
            response.ok
            ? response.json()
            : false)
        .then(cityId => {
            fetch(
                '/api/cinemas',
                {
                    method: 'post',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        Name: cinemaInfo.cinema,
                        CityId: cityId
                    })
                }
            )
                .then(response =>
                    response.ok
                    ? response.json()
                    : false)
                .then(response => {
                    let halls = [];
                    let seats = [];
                    let hallId = 0;
                    cinemaInfo.halls.forEach(hall => {
                        halls.push({
                            Name: hall.name,
                            Id: hallId
                        })
                        hall.plan.forEach(line => {
                            line.forEach(seat => {
                                delete seat.id;
                                seats.push({
                                    ...seat,
                                    hallId: hallId
                                });
                            })
                        })
                        hallId++;
                    })
                    return fetch(
                        '/api/halls',
                        {
                            method: 'post',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify({
                                Halls: halls,
                                Seats: seats,
                                CinemaId: response
                            })
                        }
                    )
                    .catch(error => {
                        console.log(error);
                        throw error;
                    })
                })
                .catch(error => {
                    console.log(error);
                    throw error;
                })
        })
        .catch(error => {
            console.log(error);
            throw error;
        })

export const getCitiesOptions = () =>
    fetch(
        '/api/cities',
        {
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
        .then(response =>
            response.ok
            ? response.json()
            : false
        )
        .then(data =>
            data)
        .catch(error => {
            console.log(error);
            throw error;
        })

export const getCinemasOptions = () =>
    fetch(
        '/api/cinemas',
        {
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
        .then(response =>
            response.ok
            ? response.json()
            : false
        )
        .then(data =>
            data)
        .catch(error => {
            console.log(error);
            throw error;
        })

export const getHallsOptions = () =>
    fetch(
        '/api/halls',
        {
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
        .then(response =>
            response.ok
            ? response.json()
            : false
        )
        .then(data =>
            data)
        .catch(error => {
            console.log(error);
            throw error;
        })

export const getSeatTypeOptions = () =>
    fetch(
        '/api/seat-types',
        {
            method: 'get',
            headers: {
                'Content-type': 'application/json',
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