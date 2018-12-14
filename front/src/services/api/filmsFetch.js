import v4 from 'uuid/v4'
import moment from 'moment'

const today = moment().format("D MMMM YY H:mm");
const DAYS_AMOUNT = 7;
const SEANSE_TIME_AMOUNT = 7;
var dates = [];
for(var i = 0; i < DAYS_AMOUNT; i++){
    var newDay = moment(today).add(i, 'days');
    for(var j = 0; j < SEANSE_TIME_AMOUNT; j++){
        var newSeanseTime = moment(newDay).add(j*120, 'minutes');
        dates.push(newSeanseTime);
    }    
}

const filmDatabase = [
    {
        id: v4(),
        image: "1.jpg",
        title: "lalaland",
        date: "gsgsg",
        text: "jskjgwkerjgregjegqwreg",
        cities: [
            {
                name: "Минск",
                cinemas: [
                    {
                        name: "Арена сити",
                        schedule: dates,
                    },
                    {
                        name: "Аврора",
                        schedule: dates,
                    }
                ]
            }
            
        ]
    },
    {
        id: v4(),
        image: "1.jpg",
        title: "котики",
        date: "gsgsg",
        text: "jskjgwkerjgregjegqwreg",
        cities: [
            {
                name: "Брест",
                cinemas: [
                    {
                        name: "Arena4 сити",
                        schedule: dates,
                    },
                    {
                        name: "Arena2 сити",
                        schedule: dates,
                    },
                ]       
            },    
            {
                name: "Гомель",
                cinemas: [
                    {
                        name: "Arena1 сити",
                        schedule: dates,
                    },
                ]
            }
        ]
    }
]


export default filmDatabase;

const delay = (ms) => 
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchFilmList = (filter) => 
    delay(500)
    .then(() => {
        var filteredList = [];
        filmDatabase
        .forEach(film => { 
            let filteredFilm = {...film}
            film
                .cities
                .forEach(city => {
                    if (city.name === filter.city) {
                        filteredFilm.cities = city;
                        var filteredCinemas = filterCinemas(city, filter)
                        if (filteredCinemas.length > 0){
                            filteredFilm.cities.cinemas = filteredCinemas;
                            filteredList.push(filteredFilm);
                        }
                    }
                });
        });
        return filteredList;
    })

const filterCinemas = (city, filter) => {
    var filteredCinemas = []; 
    city
        .cinemas
        .forEach(cinema => { 
            if (cinema.name === filter.cinema || !filter.cinema) {                            
                var filteredSchedule = filterSchedule(cinema, filter);
                if (filteredSchedule.length > 0){
                    cinema.schedule = filteredSchedule;
                    filteredCinemas.push(cinema);                                
                }
            }                        
        })
    return filteredCinemas;
}

const filterSchedule = (cinema, filter) => {
    return cinema
        .schedule
        .filter(time => 
            time.year() === filter.date.getFullYear() && 
            time.month() === filter.date.getMonth() &&
            time.date() === filter.date.getDate())
}

export const fetchFilmInfo = (filmName) => 
    delay(500)
        .then(() => {
            return filmDatabase.find(film => film.title === filmName);
        })