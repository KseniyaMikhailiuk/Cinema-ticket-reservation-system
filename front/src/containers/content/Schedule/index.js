import React, {Component} from 'react';
import {connect} from 'react-redux'
import films from '../../../services/api/filmsDB'
import filterOptions from './filterOptionsDB'
import ItemList from '../../../components/Common/ItemList/'
import FilmItem from '../../../components/FilmListItem/';
import FilterPanel from '../../../components/FilterPanel';
import * as actions from '../../../store/actions'
import {getFilteredList} from '../../../store/reducers'

class Schedule extends Component{
    render(){
        if(!filmList.length){
            return <p>Loading</p>
        }
        return(
            <div>
                <FilterPanel filterOptions={filterOptions} onFilterClick={actions.fetchFilmList}/>
                <ItemList 
                    list={filmList}
                    itemType={FilmItem}
                />
            </div>
        )
    }
} 

mapStateToScheduleProps = (state, {match: {params}}) => {
    const filters = params.filter;
    return{
        filmList: getFilteredList(state, filters)
    }
}

Schedule = withRouter(connect(
    mapStateToScheduleProps,
)(Schedule))

export default Schedule;