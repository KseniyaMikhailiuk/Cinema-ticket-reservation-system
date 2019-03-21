import {v4} from 'uuid'
import errorAwareFetch from './FetchService/fetchService'
import * as fetchOptions from './FetchService/fetchOptions'

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
    errorAwareFetch(
        '/api/cities',
        fetchOptions.post({
            Name: cinemaInfo.city
        })
    )
        .then(result =>
            result.data
        )
        .then(cityId => {
            errorAwareFetch(
                '/api/cinemas',
                fetchOptions.post({
                    Name: cinemaInfo.cinema,
                    CityId: cityId
                })
            )
                .then(result =>
                    result.data
                )
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
                                seats.push({
                                    ...seat,
                                    hallId: hallId
                                });
                            })
                        })
                        hallId++;
                    })
                    return errorAwareFetch(
                        '/api/halls',
                        fetchOptions.post({
                            Halls: halls,
                            Seats: seats,
                            CinemaId: response
                        })
                    )
                })
        })

export const getCitiesOptions = () =>
    errorAwareFetch(
        '/api/cities',
        fetchOptions.get
    )
        .then(result =>
            result.data
        )

export const getCinemasOptions = () =>
    errorAwareFetch(
        '/api/cinemas',
        fetchOptions.get
    )
        .then(result =>
            result.data
        )

export const getHallsOptions = () =>
    errorAwareFetch(
        '/api/halls',
        fetchOptions.get
    )
        .then(result =>
            result.data
        )

export const getSeatTypeOptions = () =>
    errorAwareFetch(
        '/api/seat-types',
        fetchOptions.get
    )
    .then(result =>
        result.data
    )