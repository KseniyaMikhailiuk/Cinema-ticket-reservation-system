import React from 'react'

const FilmInfo = ({
    filmInfo
}) => {
    return (
        <div className="film-info-panel">
            <section className="film-info-panel__img-container">
                <img src={filmInfo.image}/>
            </section>
            <section className="film-info-panel__description">
                <h1>{filmInfo.filmTitle}</h1> 
                <p>{filmInfo.cinema}</p>
                <p>{filmInfo.date}</p>
            </section>
        </div>
    )
}

export default FilmInfo;