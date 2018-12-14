import React from 'react'
import message from './nothingFoundMessage'

const NothingFound = () => {
    return (
        <article className="nothing-found">
            <h1>{message.text}</h1>
        </article>
    )
}
export default NothingFound