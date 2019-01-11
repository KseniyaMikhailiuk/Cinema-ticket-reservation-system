import React from 'react'
import v4 from 'uuid'
import {withNamespaces} from 'react-i18next'

const AdditionalServices = ({
    additionalServicesList,
    onServiceClick,
    t
}) => {
    return (
        <section className="additional-services">
            <h3>
                {t('additionalServices')}
            </h3>
            <ul className="additional-services__panel">
                {
                    additionalServicesList.map(service =>
                        <li className="bordered" onClick={() => onServiceClick({...service, id: v4()})}>
                            {service.name}
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

export default withNamespaces()(AdditionalServices);