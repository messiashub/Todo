import React,{useState} from "react"



function TodoForm(props) {
    const [text, settext] = useState("");


    function adiciona(event){
        let te =event.target.value;
        settext(te);
        console.log(text)
    }

    function adicionaItem(event){
        event.preventDefault()
        if(text){
        /* setitems([...items,text]) */
        props.onAddItem(text);
        settext("");
        }
    }
    return(
        <form>
            <input onChange={adiciona} type="text" value={text}/>
            <button onClick={adicionaItem}>Add</button>
        </form>
    )
    
}

export default TodoForm