import React, {Component} from 'react'
import {NotificationContainer} from 'react-notifications'
import NumericInput from 'react-numeric-input'

import SeatTypeSelectDialog from './seatTypeSelectDialog'
import HallPlan from './hallPlan'
import SeatTypesInfo from '../../Common/seatTypes'
import {changeHallPlanLinesAmount, changeHallPlanRawsAmount, changeHallPlanSeatType} from './addHallPlanApi';


class AddHallPlan extends Component{

    state = {
        lines: 0,
        raws: 0,
        hallPlan: [],
        showDialog: false,
        selectedSeatType: 0,
        selectedSeatId: 0,
        isLastSeat: 0,
        isDisabled: false
    }

    constructor (props) {
        super(props);
        this.handleSeatTypeSelect = this.handleSeatTypeSelect.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
        this.onSeatSelect = this.onSeatSelect.bind(this);
        this.showDialog =this.showDialog.bind(this);
        this.showHallPlan = this.showHallPlan.bind(this);
        this.changeHallPlanLines = this.changeHallPlanLines.bind(this);
        this.changeHallPlanRaws = this.changeHallPlanRaws.bind(this);
        this.onSeatTypeSubmit = this.onSeatTypeSubmit.bind(this);
        this.onClose = () => {
            this.setState({ showDialog: false });
        };
    }

    changeHallPlanLines (targetName, value) {
        const {hallPlan, lines, raws} = this.state;
        this.setState({
            hallPlan: changeHallPlanLinesAmount(value, {hallPlan, lines, raws}),
            [targetName]: value
        });
    }

    changeHallPlanRaws (targetName, value) {
        const {hallPlan, lines, raws} = this.state;
        this.setState({
            hallPlan: changeHallPlanRawsAmount(value, {hallPlan, lines, raws}),
            [targetName]: value
        });
    }

    onSeatSelect (seatId, raw, lineLength) {
        this.setState({
            showDialog: true,
            selectedSeatId: seatId,
            isLastSeat: raw === lineLength
        });
    }

    handleSeatTypeSelect (type) {
        this.setState({
            selectedSeatType: type
        });
    }

    onSeatTypeSubmit () {
        const {hallPlan, selectedSeatId, selectedSeatType} = this.state;
        this.setState({
            hallPlan: changeHallPlanSeatType(hallPlan, selectedSeatId, selectedSeatType)
        });
        this.onClose();
        this.setState({
            selectedSeatType: SeatTypesInfo.standard.type
        });
    }

    showDialog (){
        if (this.state.showDialog) {
            return (
                <SeatTypeSelectDialog
                    onClose={this.onClose}
                    isVisible={this.state.showDialog}
                    handleSeatTypeSelect={this.handleSeatTypeSelect}
                    onSeatTypeSubmit={this.onSeatTypeSubmit}
                    isLastSeat={this.state.isLastSeat}
                />
            )
        }
    }

    showHallPlan () {
        if (this.state.lines > 0 && this.state.raws > 0) {
            let buttonText = "";
            this.state.isDisabled ? buttonText = String.fromCharCode(10003) : buttonText = "Добавить зал";
            return (
                <>
                    <HallPlan
                        isDisabled={this.state.isDisabled}
                        hallPlan={this.state.hallPlan}
                        onSeatSelect={this.onSeatSelect}
                        raws={this.state.raws}
                    />
                    <button
                        className="form-item forms__button bordered"
                        onClick={this.sendInfo}
                        disabled={this.state.isDisabled}
                    >
                        {buttonText}
                    </button>
                </>
            )
        }
    }

    sendInfo (event) {
        event.preventDefault();
        const {onHallSubmit} = this.props;
        onHallSubmit(this.state.hallPlan);
        this.setState({
            isDisabled: true,
        });
    }

    render () {
        return (
            <form disabled={this.state.isDisabled}>
                <NumericInput
                    name="lines"
                    className="form-item"
                    min={1}
                    max={25}
                    placeholder="Число рядов"
                    onChange={(value) => this.changeHallPlanLines("lines", value)}
                    disabled={this.state.isDisabled}
                />
                <NumericInput
                    name="raws"
                    className="form-item"
                    min={1}
                    max={25}
                    placeholder="Число мест"
                    onChange={(value) => this.changeHallPlanRaws("raws", value)}
                    disabled={this.state.isDisabled}
                />
                {
                    this.showHallPlan ()
                }
                {
                    this.showDialog ()
                }
                <NotificationContainer/>
            </form>
        )
    }
}

export default AddHallPlan;