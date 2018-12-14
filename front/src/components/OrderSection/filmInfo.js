import React from 'react'

const FilmInfo = ({
    filmInfo
}) => {
    return (
        <div className="film-info-panel">
            <section className="film-info-panel__img-container">
                <img />
            </section>
            <section className="film-info-panel__description">
                <h1>{filmInfo.filmName}</h1> 
                <p>{filmInfo.cinemaName} {filmInfo.cinemaLocation}</p>
                <p>{filmInfo.date}</p>
            </section>
        </div>
    )
}

export default FilmInfo;