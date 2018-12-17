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
                        halls: [
                            {
                                number: 1,
                                schedule: dates,
                            },
                            {
                                number: 2,
                                schedule: dates,
                            }
                        ]                        
                    },
                    {
                        name: "Аврора",
                        halls: [
                            {
                                number: 1,
                                schedule: dates,
                            },
                            {
                                number: 2,
                                schedule: dates,
                            }
                        ]   
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
                        halls: [
                            {
                                number: 1,
                                schedule: dates,
                            },
                            {
                                number: 2,
                                schedule: dates,
                            }
                        ]   
                    },
                    {
                        name: "Arena2 сити",
                        halls: [
                            {
                                number: 1,
                                schedule: dates,
                            },
                            {
                                number: 2,
                                schedule: dates,
                            }
                        ]   
                    },
                ]       
            },    
            {
                name: "Гомель",
                cinemas: [
                    {
                        name: "Arena1 сити",
                        halls: [
                            {
                                number: 1,
                                schedule: dates,
                            },
                            {
                                number: 2,
                                schedule: dates,
                            }
                        ]   
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
        let filteredList = [];
        filmDatabase
        .forEach(film => { 
            let filteredFilm = {...film};
            film
                .cities
                .forEach(city => {
                    if (city.name === filter.city) {
                        var filteredCinemas = filterCinemas(city, filter);
                        if (filteredCinemas.length > 0){
                            var filteresCities = {
                                ...city, 
                                cinemas: filteredCinemas
                            };
                            filteredFilm = {
                                ...film,
                                cities: filteresCities
                            }
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
                    cinema.halls = filteredSchedule;
                    filteredCinemas.push(cinema);                                
                }
            }                        
        })
    return filteredCinemas;
}

const filterSchedule = (cinema, filter) => {
    var filteredHalls = [];
    cinema
        .halls
        .forEach(hall => {
            var filteredHallSchedule = hall
                .schedule
                .filter(time => 
                    time.year() === filter.date.getFullYear() && 
                    time.month() === filter.date.getMonth() &&
                    time.date() === filter.date.getDate())
            if (filteredHallSchedule.length > 0){
                filteredHalls.push({
                    ...hall,
                    schedule: filteredHallSchedule
                })
            }  
        })
    return filteredHalls;
}

export const fetchFilmInfo = (filmName) => 
    delay(500)
        .then(() => {            
            var selectedFilm = filmDatabase.filter(film => film.title === filmName);
            if (selectedFilm.length > 0){
                return selectedFilm[0];
            }
            return {};
        })