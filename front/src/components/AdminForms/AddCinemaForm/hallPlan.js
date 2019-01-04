import React from 'react'
import SeatTypesInfo from '../../Common/seatTypes'

const HallPlan = ({
    isDisabled,
    hallPlan,
    onSeatSelect,
    raws
}) => {

    function countSeatWidth (seat) {
        let standardSeatWidth = 100 / (raws * 2 - 1);
        let seatWidth = standardSeatWidth + '%';
        if (seat.type === SeatTypesInfo.loveseat.type) {
            seatWidth = (standardSeatWidth
                * SeatTypesInfo.loveseat.amountOfGuestsOnOneSeat
                + standardSeatWidth) + '%';
        }
        return seatWidth;
    }

    return (
        <section className="hall-plan">
            <svg className="hall-plan__screen-svg-container"
                preserveAspectRatio="none"
                viewBox="0 0 500 5"
            >
                <rect className="hall-plan__screen"/>
            </svg>
            {
                hallPlan.map(line =>
                    <section className="hall-plan__line"> {
                        line.map(seat => {
                            let seatWidth = countSeatWidth(seat)
                            return (
                                <svg
                                    className="hall-plan__seat-svg-container"
                                    width={seatWidth}
                                    preserveAspectRatio="none"
                                    viewBox="0 0 180 180"
                                    disabled={isDisabled}
                                    onClick={() => {
                                        if (!isDisabled) {
                                            onSeatSelect(seat.id, seat.raw, line.length);
                                        }
                                    }}
                                >
                                    <rect
                                        id={seat.id} rx="10"
                                        ry="10"
                                        className={`hall-plan__seat ${seat.type}`}
                                    />
                                </svg>
                            )
                        })
                    }
                    </section>
                )
            }
        </section>
    )
}


export default HallPlan;