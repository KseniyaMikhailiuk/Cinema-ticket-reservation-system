import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import filterOptions from './filterOptionsDB';
import ItemList from '../../../components/Common/ItemList/';
import FilmItem from '../../../components/FilmListItem/';
import FilterPanel from '../../../components/FilterPanel';
import * as actions  from '../../../store/actions';
import {getFilteredList} from '../../../store/reducers';

class Schedule extends Component{
    componentWillMount(){
        this.fetchData();
    }

    fetchData(){
        const {filter, fetchFilmList} = this.props;
        fetchFilmList(new Date()).then(() => console.log('fetched'));
    }

    render(){
        const {filmList, changeFilterObjectItem, filter} = this.props;
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

const mapStateToScheduleProps = (state, filter = new Date()) => {
    return{
        filmList: getFilteredList(state, filter)
    }
}

Schedule = withRouter(connect(
    mapStateToScheduleProps,
    actions
)(Schedule));

export default Schedule;