import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Loader from 'react-loader'

import AddFilmForm from '../../components/AdminForms/addFilmForm'
import AddSeanceForm from '../../components/AdminForms/addSeanceForm';
import AddAdditionalServicesForm from '../../components/AdminForms/addAdditionalServicesForm'
import AddCinemaForm from '../../components/AdminForms/AddCinemaForm'
import SuccessMessage from '../../components/Common/SuccessMessage'

import * as actions from '../../store/actions'

import * as servicesInfo from '../../services/api/additionalServicesFetch'
import * as filmsInfo from '../../services/api/filmsFetch'
import * as cinemasInfo from '../../services/api/hallPlanFetch'

import settings from '../../services/config/settings.json'

import 'react-notifications/lib/notifications.css';

import './admin.scss'

class Admin extends Component{

    state = {
        additionalServices: [],
        addCinemaFormFilterOptions: {},
        addSeanceFormFilmOptions: [],
        addCinemaFormSeatTypes: [],
        isDataLoading: false
    }

    constructor(props){
        super(props);
        this.addFilmToDatabase = this.addFilmToDatabase.bind(this);
        this.addSeanceToDatabase = this.addSeanceToDatabase.bind(this);
        this.addAdditionalServicesToDatabase = this.addAdditionalServicesToDatabase.bind(this);
        this.addCinemaToDatabase = this.addCinemaToDatabase.bind(this);
        this.getFilmFilteredOptionsAsync = this.getFilmFilteredOptionsAsync.bind(this);
    }

    componentDidMount() {
        this.setState({
            isDataLoading: true
        })
        const services = servicesInfo.getAdditionalServices();
        const cinemas = cinemasInfo.getCinemasOptions();
        const cities = cinemasInfo.getCitiesOptions();
        const halls = cinemasInfo.getHallsOptions();
        const seatTypes = cinemasInfo.getSeatTypeOptions();
        const films = filmsInfo.getFilmOptions("");

        Promise.all([services, cities, cinemas, halls, seatTypes, films])
            .then(data => {
                this.setState({
                    additionalServices: data[0],
                    addCinemaFormFilterOptions: {
                        cities: data[1],
                        cinemas: data[2],
                        halls: data[3]
                    },
                    addCinemaFormSeatTypes: data[4],
                    addSeanceFormFilmOptions: data[5],
                    isDataLoading: false
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

    getFilmFilteredOptionsAsync(inputValue){
        filmsInfo.getFilmOptions(inputValue)
            .then(films => {
                this.setState({
                    addSeanceFormFilmOptions: films
                })
            })
    }

    render() {
        const {changeFilterObjectItem, isRequestSucceeded} = this.props;
        const {
            addSeanceFormFilmOptions,
            addCinemaFormSeatTypes,
            additionalServices,
            addCinemaFormFilterOptions,
            isDataLoading
        } = this.state;

        if (isRequestSucceeded) {
            return <SuccessMessage path='/Schedule'/>
        }

        return (
            <section>
                <Loader loaded={!isDataLoading}>
                    <AddFilmForm onSubmit={this.addFilmToDatabase}/>
                    <AddSeanceForm
                        filterOptions={addCinemaFormFilterOptions}
                        filmOptions={addSeanceFormFilmOptions}
                        changeFilterObjectItem={changeFilterObjectItem}
                        onSubmit={this.addSeanceToDatabase}
                        additionalServices={additionalServices}
                        seatTypeOptions={addCinemaFormSeatTypes}
                        getFilmFilteredOptionsAsync={this.getFilmFilteredOptionsAsync}
                    />
                    <AddAdditionalServicesForm
                        onSubmit={this.addAdditionalServicesToDatabase}
                    />
                    <AddCinemaForm
                        onSubmit={this.addCinemaToDatabase}
                        seatTypeOptions={addCinemaFormSeatTypes}
                    />
                </Loader>
            </section>
        )
    }
}

const mapStateToScheduleProps = (state) => {
    return {
        isRequestSucceeded: state.isRequestSucceeded
    }
}

Admin = withRouter(connect(
    mapStateToScheduleProps,
    actions
)(Admin));

export default Admin