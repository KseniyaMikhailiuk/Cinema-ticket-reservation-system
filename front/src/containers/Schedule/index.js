import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import ItemList from '../../components/Common/ItemList/';
import FilmItem from '../../components/FilmListItem/';
import FilterPanel from '../../components/FilterPanel';

import {getFilteredList, getFilterObject, getFilterOptions} from '../../store/stateGetters';
import * as actions  from '../../store/actions';

class Schedule extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const {filter, startFilmListFetching, startFilterOptionsFetching} = this.props;
        startFilmListFetching(filter);
        startFilterOptionsFetching();
    }

    render() {
        const {filmList, changeFilterObjectItem, filter, filterOptions} = this.props;
        return (
            <section className="schedule-page">
                <FilterPanel filter={filter} filterOptions={filterOptions} onFilterClick={changeFilterObjectItem}/>
                <ItemList
                    list={filmList}
                    itemType={FilmItem}
                />
            </section>
        )
    }
}

const mapStateToScheduleProps = (state) => {
    return {
        filterOptions: getFilterOptions(state),
        filter: getFilterObject(state),
        filmList: getFilteredList(state),
    }
}

Schedule = withRouter(connect(
    mapStateToScheduleProps,
    actions
)(Schedule));

export default Schedule;