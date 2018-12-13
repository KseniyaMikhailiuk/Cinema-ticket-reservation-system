import React from 'react'
import CinemaSeanceInfo from './cinemaSeanceInfo'
import image from '../../images/films/1.jpg'
import './filmItem.scss'

const FilmItem = ({
    itemInfo
}) => {
    var chosenCity = itemInfo.cities  
    return (
        <article className="film-item">
            <section className="film-item__image-container">
                <img src={image} alt="" className="film-item__image"/>
            </section>
            <section className="film-item__description">
                <h1>{itemInfo.title}</h1>
                <h3>{itemInfo.date}</h3>
                <p>{itemInfo.text} </p>
                <section className="film-item__timetable"> {
                    chosenCity.cinemas.map(cinema => 
                        <CinemaSeanceInfo cinema={cinema} filmInfo={itemInfo}/>)   
                }                     
                </section>
            </section>
        </article>
    )
}

export default FilmItem;