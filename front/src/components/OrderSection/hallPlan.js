import React from 'react'

const HallPlan = ({
    hallPlan
}) => {

    const displaySeatLine = (seatLine, standardSeatWidth) => {
        return (
            <section className="hall-plan__line">
                {
                    seatLine
                        .map(seat => {     
                            var seatWidth = standardSeatWidth + '%';
                            if (seat.type === "loveseat"){
                                seatWidth = (standardSeatWidth * 2 + 15) + '%'; 
                            }
                            return (
                                <svg className="hall-plan__seat-svg-container" width={seatWidth}>
                                    <rect rx="10" ry="10" className="hall-plan__seat"/>
                                </svg>
                            )
                        })
                }
            </section>
        )
    }

    const getStandardSeatWidth = (seatLine) => {
        var seatsInLine = 0;
        seatLine
            .forEach(seat => {
                seatsInLine += seat.weight;
            });         
        return (100 - (seatsInLine - 1) * 5) / seatsInLine;    
    }

    return (
        <div className="hall-plan">
            <svg className="hall-plan__screen-svg-container">
                <rect className="hall-plan__screen"/>
            </svg>
            <div className="hall-plan__seats">
                {
                    hallPlan
                        .map(seatLine => {
                            return displaySeatLine(seatLine, getStandardSeatWidth(seatLine));
                        })
                }
            </div>
        </div>
    )
}

export default HallPlan;