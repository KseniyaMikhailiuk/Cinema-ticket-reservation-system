import v4 from 'uuid'

export const changeHallPlanLinesAmount = (value, prevHallPlanState, standardType) => {
    let hallPlan = [...prevHallPlanState.hallPlan];
    if (value < prevHallPlanState.lines) {
        hallPlan.length = hallPlan.length - 1;
    }
    else{
        for (let j = prevHallPlanState.hallPlan.length; j < value; j++) {
            let line = [];
            for (let i = 0; i < prevHallPlanState.raws; i++) {
                line.push({
                    id: v4(),
                    seatTypeId: standardType.id,
                    raw: i + 1,
                    line: j + 1,
                    widthScale: 1,
                    type: standardType.name
                });
            }
            hallPlan.push(line);
        }
    }
    return hallPlan;
}

export const changeHallPlanRawsAmount = (value, prevHallPlanState, standardType) => {
    let hallPlan = [];
    prevHallPlanState.hallPlan.forEach(line => {
        let updatedLine = [...line];
        if (value < prevHallPlanState.raws) {
            updatedLine.length -= (prevHallPlanState.raws - value);
        }
        else{
            console.log(standardType)
            for (let j = line.length; j < line.length + value - prevHallPlanState.raws; j++) {
                updatedLine.push({
                    id: v4(),
                    seatTypeId: standardType.id,
                    raw: j + 1,
                    line: hallPlan.length + 1,
                    widthScale: 1,
                    type: standardType.name
                });
            }
        }
        hallPlan.push(updatedLine);
    })
    return hallPlan;
}

export const changeHallPlanSeatType = (prevHallPlan, selectedSeatId, type) => {
    let hallPlan = [];
    prevHallPlan.forEach(line => {
        let updatedLine = [];
        let loveseatsAmount = 0;
        for (let seat of line){
            let updatedSeat = {...seat};
            if (updatedSeat.id === selectedSeatId) {
                updatedSeat.seatTypeId = type.id;
                updatedSeat.type = type.name;
                updatedSeat.widthScale = type.widthScale;
                if (type.widthScale > 1) {
                    loveseatsAmount++;
                }
            }
            updatedLine.push(updatedSeat);
        }
        updatedLine.length = updatedLine.length - loveseatsAmount;
        hallPlan.push(updatedLine);
    })
    return hallPlan;
}