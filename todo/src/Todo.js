import React, { useState } from "react"
import './Todo.css'
import TodoForm from './TodoForm'
import List from './List'
import Item from './Item'

function Todo(){

    

    const[items,setitems] = useState([]);


    function onAddItem(text){

        let it = new Item(text);


        setitems([...items,it])

    }   
    
    function onItemDeleted(item){
        let filteredItems = items.filter(it =>it.id != item.id)

        setitems(filteredItems)
    }


    return(<div className="container">
        <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem}></TodoForm>
        
        <List onItemDeleted={onItemDeleted} items={items}></List>
        
        </div> 
    )

}




export default Todo