import React from 'react'

import CinemaSeanceInfo from './cinemaSeanceInfo'

import './filmItem.scss'

import image from '../../images/assets/1.jpg'

const FilmItem = ({
    itemInfo
}) => {
    var chosenCity = itemInfo.cities
    return (
        <article className="list-item">
            <section className="film-item__image-container">
                <img src={image} alt="" className="film-item__image"/>
            </section>
            <section className="film-item__description">
                <h1>{itemInfo.title}</h1>
                <h3>{itemInfo.date}</h3>
                <p>{itemInfo.text} </p>
                <section className="film-item__timetable">
                {
                    chosenCity
                        .cinemas
                        .map(cinema =>
                            <CinemaSeanceInfo cinema={cinema} filmInfo={itemInfo}/>
                        )
                }
                </section>
            </section>
        </article>
    )
}

export default FilmItem;