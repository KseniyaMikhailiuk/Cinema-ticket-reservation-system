import React from 'react'
import v4 from 'uuid'

const AdditionalServices = ({
    additionalServicesList,
    onServiceClick
}) => {
    return (
        <section className="additional-services">
            <h3>
                Дополнительные услуги
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

export default AdditionalServices;