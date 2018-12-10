import v4 from 'uuid/v4'

const today = new Date();
console.log(today);
var nextDay;
var dates = [];
for(var i = 0; i < 9; i++){
    nextDay = new Date(today.getYear(), today.getMonth(), today.getDate() + i);
    dates.push(nextDay.getDate() + '/' + nextDay.getMonth() + ' ' + nextDay.getDay());
}

const filmDatabase = [
    {
        "id": v4(),
        "image": "1.jpg",
        "filmName": "lalaland",
        "cities": [
            {
                "name": "Минск",
                "cinemas": [
                    {
                        "name": "Арена сити",
                        "schedule": [
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60)
                        ],
                    },
                    {
                        "name": "Аврора",
                        "schedule": [
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60)
                        ],
                    }
                ]
            }
            
        ]
    },
    {
        "id": v4(),
        "image": "1.jpg",
        "filmName": "котики",
        "cities": [
            {
                "name": "Брест",
                "cinemas": [
                    {
                        "name": "Арена сити",
                        "schedule": [
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60)
                        ],
                    },
                    {
                        "name": "lalala сити",
                        "schedule": [
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60)
                        ],
                    },
                ]       
            },    
            {
                "name": "Гомель",
                "cinemas": [
                    {
                        "name": "kokoko сити",
                        "schedule": [
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDay(), 14, 60)
                        ],
                    },
                ]
            }
        ]
    }
]


export default filmDatabase;

const fetchFilmList = (filter, value) => {    
    switch(filter){
        case("city"):
            return filmDatabase.filter(film => (film.cities.name == value));
        case("cinema"):
            return filmDatabase.filter(film => film.cinema == value)
        case("day"):
        default:
            throw new Error(`Unknown filter ${filter}`);
    }
}