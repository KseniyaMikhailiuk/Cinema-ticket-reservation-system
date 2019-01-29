import v4 from 'uuid/v4'
import moment from 'moment'

const services = [{name: "кукис", price: 2}, {name: "кола", price: 3}, {name: "начос", price: 3}];

const DAYS_AMOUNT = 7;
const SEANSE_TIME_AMOUNT = 7;
const CURRENT_HALLS_AMOUNT = 14;
var currentSchedule = [];
for (var k = 0; k < CURRENT_HALLS_AMOUNT; k++){
    var dates = [];
    for(var i = 0; i < DAYS_AMOUNT; i++){
        var newDay = moment().add(i, 'days');
        for(var j = 0; j < SEANSE_TIME_AMOUNT; j++){
            var newSeanseTime = moment(newDay).add(j * 120, 'minutes');
            dates.push({
                dateTime: newSeanseTime,
                services: services,
                id: `${i}${j}${k}`,
                occupiedSeats: [],
                price: {
                    loveseat: 20,
                    standard: 10,
                    comfort: 15
                }
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
        description: "jskjgwkerjgregjegqwreg",
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
        description: "jskjgwkerjgregjegqwreg",
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
                var filteredHallsSchedule = filterSchedule(cinema, filter);
                if (filteredHallsSchedule.length > 0){
                    filteredCinemas.push({
                        ...cinema,
                        halls: filteredHallsSchedule
                    });
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
            return findSeance(seanceId);
        })

export const fetchOrdersInfo = (userOrdersIds) =>
    delay(500)
        .then(() => {
            let seancesInfo = [];
            userOrdersIds
                .forEach(orderItem =>
                    seancesInfo.push({
                        seanceInfo: findSeance(orderItem.seanceId),
                        orderInfo: orderItem.orderInfo,
                        id: orderItem.orderId
                    })
                );
            return seancesInfo;
        })

const findSeance = (seanceId) => {
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
                                seatsInfo: seance.occupiedSeats,
                                services: seance.services,
                                price: seance.price
                            }
                        }
                    }
                }
            }
        }
    }

    return {};
}

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
                            let existaedCinema = existedCity.cinemas.find(existedCinema => existedCinema.name === cinema.name);
                            if (!existaedCinema){
                                let hallsInfo = [];
                                for (let hall of cinema.halls){
                                    hallsInfo.push(hall.number);
                                }
                                existedCity.cinemas.push({name: cinema.name, halls: hallsInfo});
                            }
                            else{
                                for (let hall of cinema.halls){
                                    if (existaedCinema.halls.indexOf(hall.number) === -1){
                                        existaedCinema.halls.push(hall);
                                    }
                                }
                            }
                        }
                    }
                    else{
                        let cinemaNames = [];
                        for (let cinema of city.cinemas){
                            let hallsInfo = [];
                            for (let hall of cinema.halls){
                                hallsInfo.push(hall.number);
                                for (let seance of hall.schedule){
                                    let freeSeats = hall.seatAmount - seance.occupiedSeats.length;
                                    if (freeSeats > filterOptions.freeSeats){
                                        filterOptions.freeSeats = freeSeats;
                                    }
                                }
                            }
                            cinemaNames.push({name: cinema.name, halls: hallsInfo})
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
            let selectedSeanceSeats = findSeance(info.seanceInfo.seanceId).seatsInfo;
            selectedSeanceSeats.push({
                line: info.line,
                raw: info.raw,
                dateTime: new Date()
            });
        })

export const releaseSeat = (info) =>
    delay(500)
        .then(() => {
            let selectedSeanceSeats = findSeance(info.seanceInfo.seanceId).seatsInfo;
            for (var i = 0; i < selectedSeanceSeats.length; i++){
                if (selectedSeanceSeats[i].line === info.line && selectedSeanceSeats[i].raw === info.raw){
                    selectedSeanceSeats.splice(i, 1);
                }
            }
        })

export const addFilmToDatabase = (film) =>
    fetch(
        "./api/film/addfilm",
        {
            method: 'post',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Title: film.filmName,
                Poster: film.filmPoster,
                Release: film.filmRelease,
                Description: film.filmDescription,
                StartShowingDate: film.startShowingDate,
                FinishShowingDate: film.finishShowingDate,
                FilmDuration: {
                    Hours: film.filmDuration.hours(),
                    Minutes: film.filmDuration.minutes()
                }
            })
        }
    )
        .then(response =>
            response.ok
            ? response.json()
            : false)
        .then(response => {
            let formData = new FormData();
            formData.append("FilmPoster", film.filmPoster);
            formData.append("FilmId", response);
            return fetch(
                "./api/film/addposter",
                {
                    method: 'post',
                    headers: {
                        "Accept": "application/json"
                    },
                    body: formData
                }
            )
            .then(response =>
                response.ok
                ? response.json()
                : false)
            .then(data =>
                data
            )
            .catch(error => {
                console.log(error);
                throw error;
            })
        })
            .then(response =>
                response.ok
                ? response.json()
                : false)
            .then(data =>
                data
            )
            .catch(error => {
                console.log(error);
                throw error;
            })

export const addSeanceToDatabase = (seance) =>
    delay(500)
        .then(() => {
            let dateTime = moment({
                year: seance.date.getFullYear(),
                month: seance.date.getMonth(),
                date: seance.date.getDate(),
                hour: seance.time.split(':')[0],
                minute: seance.time.split(':')[1]
            })
            let seanceInfo = {
                dateTime: dateTime,
                services: seance.services,
                id: v4(),
                occupiedSeats: [],
                price: seance.price
            }
            for (let film of filmDatabase){
                if (film.title === seance.filmName){
                    let existedCity= film.cities.find(city => city.name === seance.city);
                    if (!existedCity){
                        existedCity = {
                            name: seance.city,
                            cinemas: [{
                                name: seance.cinema,
                                halls: [{
                                    number: seance.hall,
                                    seatAmount: 50,
                                    schedule: [seanceInfo]
                                }]
                            }]
                        };
                        film.cities.push(existedCity);
                        return;
                    }
                    let existedCinema = existedCity.cinemas.find(cinema => cinema.name === seance.cinema);
                    if (!existedCinema){
                        existedCinema = {
                            name: seance.cinema,
                            halls: [{
                                number: seance.hall,
                                seatAmount: 50,
                                schedule: [seanceInfo]
                            }]
                        };
                        existedCity.cinemas.push(existedCinema);
                        return;
                    }
                    let existedHall = existedCinema.halls.find(hall => hall.number.toString() === seance.hall);
                    if (!existedHall){
                        existedHall = {
                            number: seance.hall,
                            seatAmount: 50,
                            schedule: [seanceInfo]
                        };
                        existedCinema.halls.push(existedHall);
                        return;
                    }
                    existedHall.schedule.push(seanceInfo);
                }
            }
        })