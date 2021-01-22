import React, { useState } from "react"
import './Todo.css'

function Todo(){

    const [text, settext] = useState("");

    function adiciona(event){
        let te =event.target.value;
        settext(te);
        console.log(text)
    }

    return(<dir className="container">
        <h1>Todo</h1>
        <form>
            <input onChange={adiciona} type="text"/>
            <button>Add</button>
        </form>
         <ul>
            <li>{text}</li>
         </ul>
        </dir> )

}

export default Todo