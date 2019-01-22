import React from 'react'
import Loader from 'react-loader'

import './itemList.scss'
import '../../../CommonStylesheets/listItems.scss'

const ItemList = ({
    list,
    itemType
}) => {
    const Item = itemType;
    return (
        <Loader loaded={list.length > 0}>
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
        </Loader>
    )
}
export default ItemList;