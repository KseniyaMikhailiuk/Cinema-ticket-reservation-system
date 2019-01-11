import React from 'react'
import {withNamespaces} from 'react-i18next'

const NothingFound = ({
    t
}) => {
    return (
        <article className="nothing-found">
            <h1>{t('nothingFound')}</h1>
        </article>
    )
}
export default withNamespaces()(NothingFound)