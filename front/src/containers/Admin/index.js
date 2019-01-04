import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import AddFilmForm from '../../components/AdminForms/addFilmForm'
import AddSeanceForm from '../../components/AdminForms/addSeanceForm';
import AddAdditionalServicesForm from '../../components/AdminForms/addAdditionalServicesForm'
import AddCinemaForm from '../../components/AdminForms/AddCinemaForm'
import {getFilterObject, getFilterOptions} from '../../store/reducers';
import * as actions from '../../store/actions'
import * as servicesInfo from '../../services/api/addditionalServicesFetch'
import * as filmsInfo from '../../services/api/filmsFetch'
import * as cinemasInfo from '../../services/api/hallPlanFetch'
import SuccessMessage from '../../components/Common/SuccessMessage'

class Admin extends Component{

    state = {
        additionalServices: [],
        addCinemaFormFilterOptions: {
            cinemas: [],
            cities: [],
            halls: []
        }
    }

    constructor(props){
        super(props);
        this.addFilmToDatabase = this.addFilmToDatabase.bind(this);
        this.addSeanceToDatabase = this.addSeanceToDatabase.bind(this);
        this.addAdditionalServicesToDatabase = this.addAdditionalServicesToDatabase.bind(this);
        this.addCinemaToDataBase = this.addCinemaToDataBase.bind(this);
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

    addCinemaToDataBase (cinemaInfo) {
        const {dispatchSuccess} = this.props;
        cinemasInfo.addCinema(cinemaInfo)
        .then(() => {
            dispatchSuccess();
        })
    }

    render() {
        const {filter, filterOptions, changeFilterObjectItem, isRequestSucceeded} = this.props;
        if (isRequestSucceeded) {
            return <SuccessMessage path='/Schedule'/>
        }
        let filmNames = [];
        filterOptions
            .filmNames
            .forEach(filmName =>
                filmNames.push({value: filmName, label: filmName})
            );
        return (
            <section>
                <AddFilmForm onSubmit={this.addFilmToDatabase}/>
                <AddSeanceForm filter={filter}
                    filterOptions={this.state.addCinemaFormFilterOptions}
                    filmNames={filmNames}
                    changeFilterObjectItem={changeFilterObjectItem}
                    onSubmit={this.addSeanceToDatabase}
                    additionalServices={this.state.additionalServices}
                />
                <AddAdditionalServicesForm
                    onSubmit={this.addAdditionalServicesToDatabase}
                />
                <AddCinemaForm
                    filterOptions={this.state.addCinemaFormFilterOptions}
                    onSubmit={this.addCinemaToDataBase}
                />
            </section>
        )
    }
}

const mapStateToScheduleProps = (state) => {
    return {
        filterOptions: getFilterOptions(state),
        filter: getFilterObject(state),
        isRequestSucceeded: state.isRequestSucceeded,
    }
}

Admin = withRouter(connect(
    mapStateToScheduleProps,
    actions
)(Admin));

export default Admin