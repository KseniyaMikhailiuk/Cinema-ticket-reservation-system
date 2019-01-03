import React, {Component} from 'react'
import NumericInput from 'react-numeric-input'
import seatType from '../Common/seatTypes'
import v4 from 'uuid'
import 'rc-dialog/assets/index.css'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import SeatTypeSelectDialog from './seatTypeSelectDialog'
import HallPlan from './hallPlan';


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
        this.handleInputChange = this.handleInputChange.bind(this);
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

    changeHallPlanLines (value) {
        if (value < this.state.lines) {
            let hallPlan = this.state.hallPlan;
            hallPlan.length = hallPlan.length - 1;
            this.setState({
                hallPlan: hallPlan
            })
            return;
        }
        for (let j = this.state.hallPlan.length; j < value; j++){
            let line = [];
            for (let i = 0; i < this.state.raws; i++){
                line.push({
                    id: v4(),
                    type: seatType.standard.type,
                    raw: i + 1,
                    line: j
                })
            }
            this.state.hallPlan.push(line)
        }
    }

    changeHallPlanRaws (value) {
        if (value < this.state.raws) {
            this.state.hallPlan.forEach(line => {
                line.length = value
            })
            return;
        }
        for (let i = 0; i < this.state.hallPlan.length; i++){
            for (let j = this.state.raws; j < value; j++) {
                this.state.hallPlan[i].push({
                    id: v4(),
                    type: seatType.standard.type,
                    raw: j + 1,
                    line: i + 1
                })
            }
        }
    }

    handleInputChange (targetName, value) {
        if (targetName === "lines"){
            this.changeHallPlanLines (value);
        }
        else{
            this.changeHallPlanRaws (value);
        }
        this.setState({
            [targetName]: value
        })
    }

    onSeatSelect (seatId, raw, lineLength) {
        this.setState({
            showDialog: true,
            selectedSeatId: seatId,
            isLastSeat: raw === lineLength
        })
    }

    handleSeatTypeSelect (type) {
        this.setState({
            selectedSeatType: type
        })
    }

    onSeatTypeSubmit () {
        this.state.hallPlan.forEach(line => {
            for (let seat of line){
                if (seat.id === this.state.selectedSeatId) {
                    seat.type = this.state.selectedSeatType;
                    if (this.state.selectedSeatType === seatType.loveseat.type){
                        line.length = line.length - 1;
                    }
                }
            }
        })
    }

    showDialog (){
        if (this.state.showDialog){
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
            this.state.isDisabled ? buttonText = String.fromCharCode(10003) : buttonText = "Добавить зал"
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
        })
    }

    render () {
        return (
            <section disabled={this.state.isDisabled}>
                <NumericInput
                    name="lines"
                    className="form-item"
                    min={1}
                    max={25}
                    placeholder="Число рядов"
                    onChange={(value) => this.handleInputChange("lines", value)}
                    disabled={this.state.isDisabled}
                />
                <NumericInput
                    name="raws"
                    className="form-item"
                    min={1}
                    max={25}
                    placeholder="Число мест"
                    onChange={(value) => this.handleInputChange("raws", value)}
                    disabled={this.state.isDisabled}
                />
                {
                    this.showHallPlan ()
                }
                {
                    this.showDialog ()
                }
                <NotificationContainer/>
            </section>
        )
    }
}

export default AddHallPlan;