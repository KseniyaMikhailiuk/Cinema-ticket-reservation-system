import v4 from 'uuid/v4'

const today = new Date();
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
        "title": "lalaland",
        "date": "gsgsg",
        "text": "jskjgwkerjgregjegqwreg",
        "cities": [
            {
                "name": "Минск",
                "cinemas": [
                    {
                        "name": "Арена сити",
                        "schedule": [
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60)
                        ],
                    },
                    {
                        "name": "Аврора",
                        "schedule": [
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60)
                        ],
                    }
                ]
            }
            
        ]
    },
    {
        "id": v4(),
        "image": "1.jpg",
        "title": "котики",
        "date": "gsgsg",
        "text": "jskjgwkerjgregjegqwreg",
        "cities": [
            {
                "name": "Брест",
                "cinemas": [
                    {
                        "name": "Arena4 сити",
                        "schedule": [
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60)
                        ],
                    },
                    {
                        "name": "Arena2 сити",
                        "schedule": [
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60)
                        ],
                    },
                ]       
            },    
            {
                "name": "Гомель",
                "cinemas": [
                    {
                        "name": "Arena1 сити",
                        "schedule": [
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 20),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 40),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60),
                            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 60)
                        ],
                    },
                ]
            }
        ]
    }
]


export default filmDatabase;

export const fetchFilmList = (filter) => {    
    var filteredList = [];
    filmDatabase.forEach(film => {
        film.cities.forEach(city => city.cinemas.forEach(cinema => {
            if(typeof cinema.schedule.find(time => time.getFullYear() === filter.getFullYear() && 
            time.getMonth() === filter.getMonth() &&
            time.getDate() === filter.getDate())){
                if(!filteredList.find(chekced => film.title === chekced.title)){
                    filteredList.push(film);
                }
            }
        }));
    });
    return(
        filteredList
    )
}
