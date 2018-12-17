export default cinemaHallPlans = [
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
                                    id: 1,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 2,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 3,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 4,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 11,
                                    type: "comfort",
                                    price: 20, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                            ],
                            [
                                {
                                    id: 5,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 6,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 7,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 11,
                                    type: "comfort",
                                    price: 20, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 11,
                                    type: "comfort",
                                    price: 20, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                            ],
                            [
                                {
                                    id: 8,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 11,
                                    type: "loveseat",
                                    price: 20, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                        
                                {
                                    id: 11,
                                    type: "loveseat",
                                    price: 20, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2, 
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
                                    id: 1,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 2,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 3,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 4,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 11,
                                    type: "comfort",
                                    price: 20, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                            ],
                            [
                                {
                                    id: 5,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 6,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 7,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 11,
                                    type: "comfort",
                                    price: 20, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 11,
                                    type: "comfort",
                                    price: 20, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                            ],
                            [
                                {
                                    id: 8,
                                    type: "standard",
                                    price: 10, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                                {
                                    id: 11,
                                    type: "loveseat",
                                    price: 20, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2,
                                },
                        
                                {
                                    id: 11,
                                    type: "loveseat",
                                    price: 20, 
                                    occupied: false,
                                    raw: 1,
                                    line: 2, 
                                },
                            ]
                        
                        ]
                    }
                ]
            }
        ]
    }
]

const delay = (ms) => 
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchHallPlan = (hallInfo) => 
    delay(500)
        .then(() => {
            cinemaHallPlans
                .foreach(city => {
                    if (city.cityName === hallInfo.city) {
                        city
                            .foreach(cinema => {
                                if (cinema.name === hallInfo.cinema) {
                                    cinema
                                        .foreach(hall => {
                                            if (hall.number === hallInfo.hallNumber) {
                                                return hall.plan;
                                            }
                                        })
                                }
                            })
                    }
                })
        })