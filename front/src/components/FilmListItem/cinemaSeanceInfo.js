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
                                to={`/TicketOrder/${seance.id}`}
                                key={seance.id}
                            >
                                {`${seance.dateTime.hour()} : ${seance.dateTime.minute()}`}
                            </NavLink>
                        )
                    )
                }
            </section>
        </section>
    )
} 

export default CinemaSeanceInfo;