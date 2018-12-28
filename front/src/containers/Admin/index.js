import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import AddFilmForm from '../../components/AdminForms/addFilmForm'
import AddSeanceForm from '../../components/AdminForms/addSeanceForm';
import {getFilterObject, getFilterOptions} from '../../store/reducers';
import * as actions from '../../store/actions'
import AddAdditionalServicesForm from '../../components/AdminForms/addAdditionalServicesForm'
import * as servicesInfo from '../../services/api/addditionalServicesFetch'
import * as filmsInfo from '../../services/api/filmsFetch'
import SuccessMessage from '../../components/Common/SuccessMessage'

class Admin extends Component{

    state = {
        additionalServices: []
    }

    constructor(props){
        super(props);
        this.addFilmToDatabase = this.addFilmToDatabase.bind(this);
        this.addSeanceToDatabase = this.addSeanceToDatabase.bind(this);
        this.addAdditionalServicesToDatabase = this.addAdditionalServicesToDatabase.bind(this);
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
    }

    componentWillUnmount() {
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

    render() {
        const {filter, filterOptions, changeFilterObjectItem, isRequestSucceeded} = this.props;

        if (isRequestSucceeded){
            return <SuccessMessage path='/Schedule'/>
        }

        return(
            <section>
                <AddFilmForm onSubmit={this.addFilmToDatabase}/>
                <AddSeanceForm filter={filter}
                    filterOptions={filterOptions}
                    changeFilterObjectItem={changeFilterObjectItem}
                    onSubmit={this.addSeanceToDatabase}
                    additionalServices={this.state.additionalServices}
                />
                <AddAdditionalServicesForm
                    onSubmit={this.addAdditionalServicesToDatabase}/>
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