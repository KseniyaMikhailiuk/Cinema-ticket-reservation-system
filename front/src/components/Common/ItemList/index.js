import React from 'react'

import NothingFound from '../nothingFound'

import './itemList.scss'
import '../../../CommonStylesheets/listItems.scss'

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