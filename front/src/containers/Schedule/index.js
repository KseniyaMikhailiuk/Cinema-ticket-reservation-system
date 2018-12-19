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
        const {filter, fetchFilmList} = this.props;
        fetchFilmList(filter);
    }

    render() {
        const {filmList, changeFilterObjectItem, filter, filterOptions} = this.props;
        return (
            <>
                <FilterPanel filter={filter} filterOptions={filterOptions} onFilterClick={changeFilterObjectItem}/>
                <ItemList 
                    list={filmList}
                    itemType={FilmItem}
                />
            </>
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