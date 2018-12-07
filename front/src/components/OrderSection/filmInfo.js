import React from 'react'

const FilmInfo = ({
    filmInfo
}) => {
    return(
        <div className="film-info-panel">
            <section className="film-info-panel__img-container">
                <img />
            </section>
            <section className="film-info-panel__description">
                <h1>lalaland</h1> {/* {filmInfo.filmName} */}
                <p>Arena city</p> {/*{filmInfo.cinemaName} {filmInfo.cinemaLocation}*/}
                <p>25-05-2048</p> {/*{filmInfo.date}*/}
            </section>
        </div>
    )
}

export default FilmInfo;