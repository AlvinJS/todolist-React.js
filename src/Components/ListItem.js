import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
        return <div className="m-5 p-5 w-full bg-blue-100 rounded-lg max-w-xl" key={item.key}>
            
                <span className="m-3 pr-96">{item.text}</span>
            <span className="m-3"><FontAwesomeIcon className="text-red-700" icon="trash" 
            onClick={ () => props.deleteItem(item.key)
            
            }
            /></span>
            
            </div>
        
        })

    return(
        <div>{listItems}</div>
    )
}

export default ListItems;
