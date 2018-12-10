import React from 'react'
import {NavLink} from 'react-router-dom'

const CinemaSeanceInfo = ({
    filmInfo
}) => {
    return (
        <section className="cinema-seance-timetable">
            <h1>
                {filmInfo.cinemaName}
            </h1>   
            <section className="time">
                {filmInfo.time.map(seance => 
                    <NavLink className="bordered" to="/" >
                        {seance.getHours() + ':' + seance.getMinutes()}
                    </NavLink>
                )}
            </section>
        </section>
    )
} 

export default CinemaSeanceInfo;