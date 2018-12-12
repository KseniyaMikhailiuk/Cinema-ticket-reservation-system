import React from 'react'
import {NavLink} from 'react-router-dom'

const CinemaSeanceInfo = ({
    filmInfo,
}) => {
    return (
        <section className="cinema-seance-timetable">
            <h1>
                {filmInfo.name}
            </h1>   
            <section className="time">
                {filmInfo.schedule.map(seance => 
                    <NavLink className="bordered" to="/" >
                        {`${seance.hour()} : ${seance.minute()}`}
                    </NavLink>
                )}
            </section>
        </section>
    )
} 

export default CinemaSeanceInfo;