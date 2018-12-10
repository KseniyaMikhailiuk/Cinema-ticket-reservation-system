import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import filterOptions from './filterOptionsDB';
import ItemList from '../../../components/Common/ItemList/';
import FilmItem from '../../../components/FilmListItem/';
import FilterPanel from '../../../components/FilterPanel';
import {fetchFilmList} from '../../../store/actions';
import getFilteredList from '../../../store/reducers';
import api from '../../../services/api'

class Schedule extends Component{
    componentWillMount(){

    }

    render(){
        const {filmList, fetchFilmList} = this.props;
        return(
            <div>
                <FilterPanel filterOptions={filterOptions} onFilterClick={fetchFilmList}/>
                <ItemList 
                    list={filmList.getFilteredList}
                    itemType={FilmItem}
                />
            </div>
        )
    }
} 

const mapStateToScheduleProps = (state, {match: {params}}) => {
    const filters = params.filter;
    return{
        filmList: getFilteredList(state, fetchFilmList(new Date()))
    }
}

Schedule = withRouter(connect(
    mapStateToScheduleProps,
)(Schedule));

export default Schedule;