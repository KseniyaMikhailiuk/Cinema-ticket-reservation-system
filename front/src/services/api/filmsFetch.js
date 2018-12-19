import v4 from 'uuid/v4'
import moment from 'moment'

const services = ["cookie", "cola", "nachos"];

const today = moment().format("D MMMM YY H:mm");
const DAYS_AMOUNT = 7;
const SEANSE_TIME_AMOUNT = 7;
const CURRENT_HALLS_AMOUNT = 14;
var currentSchedule = [];
for (var k = 0; k < CURRENT_HALLS_AMOUNT; k++){
    var dates = [];
    for(var i = 0; i < DAYS_AMOUNT; i++){
        var newDay = moment(today).add(i, 'days');
        for(var j = 0; j < SEANSE_TIME_AMOUNT; j++){
            var newSeanseTime = moment(newDay).add(j * 120, 'minutes');
            dates.push({
                dateTime: newSeanseTime, 
                services: services, 
                id: `${i}${j}${k}`, 
                occupiedSeats: [],
            });
        }    
    }
    currentSchedule.push(dates);
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
                                seatAmount: 50,
                                schedule: currentSchedule[0],
                            },
                            {
                                number: 2,
                                seatAmount: 50,
                                schedule: currentSchedule[1],
                            }
                        ]                        
                    },
                    {
                        name: "Аврора",
                        halls: [
                            {
                                number: 1,
                                seatAmount: 50,
                                schedule: currentSchedule[2],
                            },
                            {
                                number: 2,
                                seatAmount: 50,
                                schedule: currentSchedule[3],
                            }
                        ]   
                    },
                    {
                        name: "Комсомолец",
                        halls: [
                            {
                                number: 1,
                                seatAmount: 50,
                                schedule: currentSchedule[4],
                            },
                            {
                                number: 2,
                                seatAmount: 50,
                                schedule: currentSchedule[5],
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
                                seatAmount: 50,
                                schedule: currentSchedule[6],
                            },
                            {
                                number: 2,
                                seatAmount: 50,
                                schedule: currentSchedule[7],
                            }
                        ]   
                    },
                    {
                        name: "Arena2 сити",
                        halls: [
                            {
                                number: 1,
                                seatAmount: 50,
                                schedule: currentSchedule[8],
                            },
                            {
                                number: 2,
                                seatAmount: 50,
                                schedule: currentSchedule[9],
                            }
                        ]   
                    },
                ]       
            },    
            {
                name: "Минск",
                cinemas: [
                    {
                        name: "Арена сити",
                        halls: [
                            {
                                number: 1,
                                seatAmount: 50,
                                schedule: currentSchedule[10],
                            },
                            {
                                number: 2,
                                seatAmount: 50,
                                schedule: currentSchedule[11],
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
                                seatAmount: 50,
                                schedule: currentSchedule[12],
                            },
                            {
                                number: 2,
                                seatAmount: 50,
                                schedule: currentSchedule[13],
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
            if (film.title.indexOf(filter.filmName) !== -1 || !filter.filmName){
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
            }            
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
                .filter(seance => 
                    seance.dateTime.year() === filter.date.getFullYear() && 
                    seance.dateTime.month() === filter.date.getMonth() &&
                    seance.dateTime.date() === filter.date.getDate() &&
                    hall.seatAmount - seance.occupiedSeats.length >= filter.freeSeats)
            if (filteredHallSchedule.length > 0){
                filteredHalls.push({
                    ...hall,
                    schedule: filteredHallSchedule
                })
            }  
        })

    return filteredHalls;
}

export const fetchFilmInfo = (seanceId) => 
    delay(500)
        .then(() => {  
            for (let film of filmDatabase){
                for (let city of film.cities){
                    for (let cinema of city.cinemas){
                        for (let hall of cinema.halls){
                            for (let seance of hall.schedule){
                                if (seance.id === seanceId){
                                    return {
                                        city: city.name,
                                        cinema: cinema.name,
                                        hall: hall.number,
                                        filmTitle: film.title,
                                        image: film.image,
                                        dateTime: seance.dateTime,
                                        seanceId: seanceId,
                                        seatsInfo: seance.seatsInfo
                                    }
                                }
                            }
                        }
                    }
                }
            }

            return {};
        })

export const fetchFilterOptions = () => 
    delay(500)
        .then(() => {
            let filterOptions = {
                filmNames: [],
                cities: [],
                freeSeats: 0
            };
            for (let film of filmDatabase){
                for (let city of film.cities){
                    let existedCity = filterOptions.cities.find(addedCity => addedCity.name === city.name);     
                    if (existedCity){
                        for (let cinema of city.cinemas){
                            if (existedCity.cinemas.indexOf(cinema.name) === -1){
                                existedCity.cinemas.push(cinema.name);
                            }                            
                        }
                    }
                    else{
                        let cinemaNames = []
                        for (let cinema of city.cinemas){
                            cinemaNames.push(cinema.name)  
                            for (let hall of cinema.halls){
                                for (let seance of hall.schedule){
                                    let freeSeats = hall.seatAmount - seance.occupiedSeats.length;
                                    if (freeSeats > filterOptions.freeSeats){
                                        filterOptions.freeSeats = freeSeats;
                                    }
                                }
                            }                
                        }
                        filterOptions.cities.push({
                            name: city.name,
                            cinemas: cinemaNames
                        })
                    }
                }
                filterOptions.filmNames.push(film.title);
            }
            return filterOptions;
        })

export const occupySeat = (info) => 
    delay(500)
    .then(() => {
        for (let film of filmDatabase){
            if (film.title === info.seanceInfo.filmTitle){
                for (let city of film.cities){
                    if (city.name === info.seanceInfo.city){                        
                        for (let cinema of city.cinemas){                     
                            if (cinema.name === info.seanceInfo.cinema){
                                for (let hall of cinema.halls){
                                    if (hall.number === info.seanceInfo.hall){
                                        for(let seance of hall.schedule){
                                            if(seance.id === info.seanceInfo.seanceId){                                      
                                                seance.occupiedSeats.push({
                                                    line: info.line,
                                                    raw: info.raw,
                                                    dateTime: new Date()
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }            
                }
            }
        }
    })
