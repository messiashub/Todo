import React, { useState } from "react"
import './Todo.css'

function Todo(){

    const [text, settext] = useState("");

    const[items,setitems] = useState([])                 // criando um estado

    function adiciona(event){
        let te =event.target.value;
        settext(te);
        console.log(text)
    }

    function adicionaItem(event){
        event.preventDefault()
        if(text){
        setitems([...items,text])
        settext("");
        }
    }

    return(<dir className="container">
        <h1>Todo</h1>
        <form>
            <input onChange={adiciona} type="text" value={text}/>
            <button onClick={adicionaItem}>Add</button>
        </form>
         <ul>
            {items.map(item=> <li>{item}</li>)}
         </ul>
        </dir> 
    )

}

export default Todo