import React from 'react'


const HallPlan = ({
    freePlaces
}) => {
    return(
        <div className="hall-plan">
            <svg className="hall-plan__svg-container">
                <rect className="hall-plan__screen-rectangle"/>
            </svg>            
        </div>
    )
}

export default HallPlan;