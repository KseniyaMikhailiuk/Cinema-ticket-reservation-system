import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import ItemList from '../../components/Common/ItemList/';
import FilmItem from '../../components/FilmListItem/';
import FilterPanel from '../../components/FilterPanel';
import * as actions  from '../../store/actions';
import {getFilteredList, getFilterObject, getFilterOptions} from '../../store/reducers';

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
        const {filter, startFilmListFetching} = this.props;
        startFilmListFetching(filter);
    }

    render() {
        const {filmList, changeFilterObjectItem, filter, filterOptions} = this.props;
        return (
            <section className="shedule-page">
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