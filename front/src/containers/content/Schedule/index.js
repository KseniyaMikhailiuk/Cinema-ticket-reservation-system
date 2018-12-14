import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import filterOptions from './filterOptionsDB';
import ItemList from '../../../components/Common/ItemList/';
import FilmItem from '../../../components/FilmListItem/';
import FilterPanel from '../../../components/FilterPanel';
import * as actions  from '../../../store/actions';
import {getFilteredList, getFilterObject} from '../../../store/reducers';

class Schedule extends Component{
    componentDidMount(){
        this.fetchData();
    }

    componentDidUpdate(prevProps){
        if(this.props.filter !== prevProps.filter){
            this.fetchData();
        }
    }

    fetchData(){
        const {filter, fetchFilmList} = this.props;
        fetchFilmList(filter);
    }

    render(){
        const {filmList, changeFilterObjectItem} = this.props;
        return(
            <div>
                <FilterPanel filterOptions={filterOptions} onFilterClick={changeFilterObjectItem}/>
                <ItemList 
                    list={filmList}
                    itemType={FilmItem}
                />
            </div>
        )
    }
} 

const mapStateToScheduleProps = (state) => {
    return {
        filter: getFilterObject(state),
        filmList: getFilteredList(state)
    }
}

Schedule = withRouter(connect(
    mapStateToScheduleProps,
    actions
)(Schedule));

export default Schedule;