import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import AddFilmForm from '../../components/AdminForms/addFilmForm'
import AddSeanceForm from '../../components/AdminForms/addSeanceForm';
import AddAdditionalServicesForm from '../../components/AdminForms/addAdditionalServicesForm'
import AddCinemaForm from '../../components/AdminForms/AddCinemaForm'
import SuccessMessage from '../../components/Common/SuccessMessage'

import {getFilterObject} from '../../store/stateGetters';
import * as actions from '../../store/actions'

import * as servicesInfo from '../../services/api/additionalServicesFetch'
import * as filmsInfo from '../../services/api/filmsFetch'
import * as cinemasInfo from '../../services/api/hallPlanFetch'

import 'react-notifications/lib/notifications.css';

import './admin.scss'

class Admin extends Component{

    state = {
        additionalServices: [],
        addCinemaFormFilterOptions: {
            cinemas: [],
            cities: [],
            halls: []
        },
        addSeanceFormFilmOptions: [],
        addCinemaFormSeatTypes: []
    }

    constructor(props){
        super(props);
        this.addFilmToDatabase = this.addFilmToDatabase.bind(this);
        this.addSeanceToDatabase = this.addSeanceToDatabase.bind(this);
        this.addAdditionalServicesToDatabase = this.addAdditionalServicesToDatabase.bind(this);
        this.addCinemaToDatabase = this.addCinemaToDatabase.bind(this);
    }

    componentDidMount() {
        const {startFilterOptionsFetching} = this.props;
        startFilterOptionsFetching();
        servicesInfo.getAdditionalServices()
            .then(services => {
                this.setState({
                    additionalServices: services
                });
            })
        cinemasInfo.getFilterOptions()
            .then(filterOptions => {
                this.setState({
                    addCinemaFormFilterOptions: filterOptions
                })
            })
        cinemasInfo.getSeatTypeOptions()
            .then(seatTypes => {
                this.setState({
                    addCinemaFormSeatTypes: seatTypes
                })
            })
        filmsInfo.getFilmOptions()
            .then(filmOption => {
                this.setState({
                    addSeanceFormFilmOptions: filmOption
                })
            })
    }

    componentWillUnmount () {
        const {clearInfo} = this.props;
        clearInfo();
    }

    addFilmToDatabase (filmInfo) {
        const {dispatchSuccess} = this.props;
        filmsInfo.addFilmToDatabase(filmInfo)
            .then(() => {
                dispatchSuccess();
            });
    }

    addSeanceToDatabase (seanceInfo) {
        const {dispatchSuccess} = this.props;
        filmsInfo.addSeanceToDatabase(seanceInfo)
            .then(() => {
                dispatchSuccess();
            });
    }

    addAdditionalServicesToDatabase (serviceInfo) {
        const {dispatchSuccess} = this.props;
        servicesInfo.addAdditionalService(serviceInfo)
            .then(() => {
                dispatchSuccess();
            })
    }

    addCinemaToDatabase (cinemaInfo) {
        const {dispatchSuccess} = this.props;
        cinemasInfo.addCinema(cinemaInfo)
            .then(() => {
                dispatchSuccess();
            })
    }

    render() {
        const {filter, changeFilterObjectItem, isRequestSucceeded} = this.props;
        const {
            addSeanceFormFilmOptions,
            addCinemaFormSeatTypes,
            additionalServices,
            addCinemaFormFilterOptions
        } = this.state;

        if (isRequestSucceeded) {
            return <SuccessMessage path='/Schedule'/>
        }

        return (
            <section>
                <AddFilmForm onSubmit={this.addFilmToDatabase}/>
                <AddSeanceForm filter={filter}
                    filterOptions={addCinemaFormFilterOptions}
                    filmOptions={addSeanceFormFilmOptions}
                    changeFilterObjectItem={changeFilterObjectItem}
                    onSubmit={this.addSeanceToDatabase}
                    additionalServices={additionalServices}
                    seatTypeOptions={addCinemaFormSeatTypes}
                />
                <AddAdditionalServicesForm
                    onSubmit={this.addAdditionalServicesToDatabase}
                />
                <AddCinemaForm
                    onSubmit={this.addCinemaToDatabase}
                />
            </section>
        )
    }
}

const mapStateToScheduleProps = (state) => {
    return {
        filter: getFilterObject(state),
        isRequestSucceeded: state.isRequestSucceeded,
    }
}

Admin = withRouter(connect(
    mapStateToScheduleProps,
    actions
)(Admin));

export default Admin