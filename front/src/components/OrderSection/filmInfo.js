import React from 'react'

const FilmInfo = ({
    filmInfo,
    selectedSeanceInfo
}) => {
    return (
        <div className="film-info-panel">
            <section className="film-info-panel__img-container">
                <img src={filmInfo.image}/>
            </section>
            <section className="film-info-panel__description">
                <h1>{filmInfo.title}</h1> 
                <p>{selectedSeanceInfo.cinema}</p>
                <p>{selectedSeanceInfo.date}</p>
            </section>
        </div>
    )
}

export default FilmInfo;