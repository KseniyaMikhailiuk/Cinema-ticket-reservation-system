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
    delay(500)
        .then(() => {
            let existedCity = cinemaHallPlans.find(city => city.cityName === cinemaInfo.city);
            if (!existedCity){
                existedCity = {
                    cityName: cinemaInfo.city,
                    cinemas: [
                        {
                            name: cinemaInfo.cinema,
                            hallsAmount: cinemaInfo.hallsAmount,
                            halls: cinemaInfo.halls,
                        }
                    ]
                }
                cinemaHallPlans.push(existedCity);
                return;
            }
            let existedCinema = existedCity.cinemas.find(cinema => cinema.name === cinemaInfo.cicinematy);
            if (!existedCinema){
                existedCity.cinemas.push({
                        name: cinemaInfo.cinema,
                        hallsAmount: cinemaInfo.hallsAmount,
                        halls: cinemaInfo.halls,
                    })
                return;
            }
        })

export const getFilterOptions = () =>
    delay(500)
        .then(() => {
            let filterOptions = {
                cities: [],
                cinemas: [],
                halls: []
            };
            for (let city of cinemaHallPlans) {
                filterOptions.cities.push({value: city.cityName, label: city.cityName});
                for (let cinema of city.cinemas){
                    if (cinema.halls.length > 0){
                        filterOptions.cinemas.push({value: city.cityName, label: cinema.name})
                        for (let hall of cinema.halls){
                            filterOptions.halls.push({value: `${cinema.name}, ${city.cityName}`, label: hall.number})
                        }
                    }
                }
            }
            return filterOptions;
        })