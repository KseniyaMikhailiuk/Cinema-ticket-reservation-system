import React from 'react'
import './itemList.scss'

const ItemList = ({
    list,
    itemType
}) => {
    const Item = itemType;
    return(
        <div className="list">
            {list.map(item => 
                <Item 
                    key={item.id}
                    itemInfo={item}  
                />
            )}
        </div>
    )
}
export default ItemList;