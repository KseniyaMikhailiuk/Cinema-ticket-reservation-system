import React from 'react'
import './itemList.scss'
import NothingFound from './nothingFound'

const ItemList = ({
    list,
    itemType
}) => {
    const Item = itemType;
    if (list.length > 0) {
        return (
            <div className="list">
                {
                    list
                        .map(item => 
                            <Item 
                                key={item.id}
                                itemInfo={item}  
                            />
                        )
                }
            </div>
        )
    }
    else{
        return (
            <NothingFound />
        )
    }

}
export default ItemList;