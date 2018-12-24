import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import AddFilmForm from '../../components/AdminForms/addFilmForm'
import AddSeanceForm from '../../components/AdminForms/addSeanceForm';
import {getFilterObject, getFilterOptions} from '../../store/reducers';
import * as actions from '../../store/actions'
import AddAdditionalServicesForm from '../../components/AdminForms/addAdditionalServicesForm'
import * as filmsInfo from '../../services/api/filmsFetch'

class Admin extends Component{

    componentDidMount() {
        const {startFilterOptionsFetching} = this.props;
        startFilterOptionsFetching();
    }

    componentWillUnmount() {
        const {clearInfo} = this.props;
        clearInfo();
    }

    addFilmToDatabase(filmInfo) {
        console.log(filmInfo)
        filmsInfo.addFilmToDatabase(filmInfo);
    }

    render() {
        const {filter, filterOptions, changeFilterObjectItem} = this.props;
        return(
            <section>
                <AddFilmForm onSubmit={this.addFilmToDatabase}/>
                <AddSeanceForm filter={filter}
                    filterOptions={filterOptions}
                    changeFilterObjectItem={changeFilterObjectItem}
                />
                <AddAdditionalServicesForm/>
            </section>
        )
    }
}

const mapStateToScheduleProps = (state) => {
    return {
        filterOptions: getFilterOptions(state),
        filter: getFilterObject(state),
    }
}

Admin = withRouter(connect(
    mapStateToScheduleProps,
    actions
)(Admin));

export default Admin