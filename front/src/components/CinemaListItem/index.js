import React from 'react'

import './cinemaItem.scss'

const CinemaItem = ({
    itemInfo
}) => {
    return (
        <article className="list-item">
            <img src="" alt="" className="cinema-item__image"></img>
            <section className="cinema-item__description">
                {itemInfo.text}
            </section>
        </article>
    )
}
export default CinemaItem;