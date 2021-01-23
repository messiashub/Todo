import React  from 'react';


function List(props) {

    

    return <ul>
            {props.items.map(item=> <li key={item.id}>{item.text}
             <button onClick={()=>{props.onItemDeleted(item)}}><img src="./assets/lixeira.png" alt="delete"/></button>
            </li>)}
           
        
         </ul>
    
}


export default List;