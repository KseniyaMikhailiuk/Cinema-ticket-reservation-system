import React, {Component} from 'react'
import NumericInput from 'react-numeric-input'
import seatType from '../Common/seatTypes'
import v4 from 'uuid'
import Dialog from 'rc-dialog'
import 'rc-dialog/assets/index.css'
import Select from 'react-select';

class AddHallPlan extends Component{

    state = {
        lines: 0,
        raws: 0,
        hallPlan: [],
        showDialog: false,
        selectedSeatType: 0,
        selectedSeatId: 0,
        isLastSeat: 0
    }

    constructor (props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
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
            this.state.hallPlan.length = value;
            return;
        }
        let line = [];
        for (let i = 0; i < this.state.raws; i++){
            line.push({
                id: v4(),
                type: "standard",
                raw: i + 1,
                line: this.state.lines.length
            })
        }
        this.state.hallPlan.push(line)
    }

    changeHallPlanRaws (value) {
        if (value < this.state.raws) {
            this.state.hallPlan.forEach(line => {
                line.length = line.length - 1;
            })
            return;
        }
        for (let i = 0; i < this.state.hallPlan.length; i++){
            this.state.hallPlan[i].push({
                id: v4(),
                type: "standard",
                raw: this.state.hallPlan[i].length + 1,
                line: i + 1
            })
        }
    }

    handleInputChange (targetName, value) {
        this.setState({
            [targetName]: value
        })
        if (targetName === "lines"){
            this.changeHallPlanLines (value);
        }
        else{
            this.changeHallPlanRaws (value);
        }

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
            var seatTypesForSelect = [];
            for (let element in seatType){
                if (this.state.isLastSeat && element === seatType.loveseat.type) {
                    continue;
                }
                seatTypesForSelect.push({value: element, label: element});
            }
            return (
                <Dialog
                    visible={this.state.showDialog}
                    visible
                    onClose={this.onClose}
                    maskAnimation="fade"
                    animation="zoom"
                    closable
                >
                    <p>Тип места</p>
                    <Select
                        name="seatType"
                        className="select"
                        options={seatTypesForSelect}
                        isSearchable
                        isClearable
                        onChange={(selectedOption) => this.handleSeatTypeSelect(selectedOption.label)}
                        placeholder="Выберите тип места"
                    />
                    <button
                        type="button"
                        className="form-item"
                        onClick={this.onSeatTypeSubmit}
                    >
                        Выбрать
                    </button>
                </Dialog>
            )
        }
    }

    showHallPlan () {
        if (this.state.lines > 0 && this.state.raws > 0) {
            return (
                <section>
                    <svg className="hall-plan__screen-svg-container"
                        preserveAspectRatio="none"
                        viewBox="0 0 500 5"
                    >
                        <rect className="hall-plan__screen"/>
                    </svg>
                    {this.state.hallPlan.map(line =>
                        <section className="hall-plan__line">
                            {line.map(seat =>{
                                    let standardSeatWidth = 100 / (this.state.raws * 2 - 1);
                                    let seatWidth = standardSeatWidth + '%';
                                    if (seat.type === seatType.loveseat.type) {
                                        seatWidth = (standardSeatWidth
                                            * seatType.loveseat.amountOfGuestsOnOneSeat
                                            + standardSeatWidth) + '%';
                                    }
                                    return(
                                        <svg
                                            className="hall-plan__seat-svg-container"
                                            width={seatWidth}
                                            preserveAspectRatio="none"
                                            viewBox="0 0 180 180"
                                            onClick={() => this.onSeatSelect(seat.id, seat.raw, line.length)}
                                        >
                                            <rect
                                                id={seat.id} rx="10"
                                                ry="10"
                                                className={`hall-plan__seat ${seat.type}`}
                                            />
                                        </svg>
                                    )
                                }
                            )}
                        </section>
                    )}
                </section>
            )
        }
    }

    render () {
        const {onHallSubmit} = this.props;
        return (
            <section>
                <NumericInput
                    name="lines"
                    className="form-item"
                    min={1}
                    max={25}
                    placeholder="Число рядов"
                    onChange={(value) => this.handleInputChange("lines", value)}
                    required
                />
                <NumericInput
                    name="raws"
                    className="form-item"
                    min={1}
                    max={25}
                    placeholder="Число мест"
                    onChange={(value) => this.handleInputChange("raws", value)}
                    required
                />
                <button
                    className="form-item forms__button bordered"
                    onClick={() => onHallSubmit(this.state.hallPlan)}
                >
                    Добавить зал
                </button>
                {
                    this.showHallPlan ()
                }
                {
                    this.showDialog ()
                }
            </section>
        )
    }
}

export default AddHallPlan;