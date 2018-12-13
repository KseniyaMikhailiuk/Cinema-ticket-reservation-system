import React, {Component} from 'react'
import cinemas from './cinemasDB'
import ItemList from '../../../components/Common/ItemList/';
import CinemaItem from '../../../components/CinemaListItem/';

class Cinemas extends Component{
    render() {
        return (
            <ItemList 
                list={cinemas}
                itemType={CinemaItem}
            />
        )
    }
}

export default Cinemas;