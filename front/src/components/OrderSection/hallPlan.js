import React from 'react'
import seatType from './seatTypes'

const HallPlan = ({
    hallPlan,
    onSeatSelect
}) => {

    const handleSeatSelect = (event) => {
        console.log(event.target.id)
        onSeatSelect(event.target.id);
    }

    const displaySeatLine = (seatLine, standardSeatWidth) => {
        return (
            <section className="hall-plan__line">
                {
                    seatLine
                        .map(seat => {     
                            var seatWidth = standardSeatWidth + '%';
                            if (seat.type === seatType.loveseat.type){
                                seatWidth = (standardSeatWidth * seatType.loveseat.guestOnSeatAmount + standardSeatWidth) + '%'; 
                            }
                            return (
                                <svg 
                                    className="hall-plan__seat-svg-container" 
                                    width={seatWidth} 
                                    onClick={handleSeatSelect}
                                >
                                    <rect id={seat.id} rx="10" ry="10" className="hall-plan__seat"/>
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
                seatsInLine += seatType[seat.type].guestOnSeatAmount;
            });         
        return 100 / (seatsInLine * 2 - 1);    
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