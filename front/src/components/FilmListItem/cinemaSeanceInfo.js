import React from 'react'
import {NavLink} from 'react-router-dom'

const CinemaSeanceInfo = ({
    cinema,
    filmInfo
}) => {
    return (
        <section className="cinema-seance-timetable">
            <h1>
                {cinema.name}
            </h1>   
            <section className="time">
                {
                    cinema
                    .halls
                    .map(hall => 
                        hall
                        .schedule
                        .map(seance => 
                            <NavLink className="bordered" 
                                to={`/TicketOrder/${filmInfo.title}/${filmInfo.cities.name}/${cinema.name}/${seance}`}>
                                {`${seance.hour()} : ${seance.minute()}`}
                            </NavLink>
                        )
                    )
                }
            </section>
        </section>
    )
} 

export default CinemaSeanceInfo;