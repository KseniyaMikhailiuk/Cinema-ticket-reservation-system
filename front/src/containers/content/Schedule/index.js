import React, {Component} from 'react';
import films from './filmsDB'
import filterOptions from './filterOptionsDB'
import ItemList from '../../../components/Common/ItemList/'
import FilmItem from '../../../components/FilmListItem/';
import FilterPanel from '../../../components/Common/FilterPanel';

class Schedule extends Component{
    render(){
        return(
            <div>
                <FilterPanel filterOptions={filterOptions}/>
                <ItemList 
                    list={films}
                    itemType={FilmItem}
                />
            </div>
        )
    }
} 

export default Schedule;