
import { useState } from "react";

function NewTodoForm({Add}) {
    const [todoItem, setTodoItem] = useState('')

    const handleChange = (evt) => (
        setTodoItem(evt.target.value)
    )

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        
        if (!evt.target.todo.value){
            alert("must type a to-do item")
            return
        }

        console.log(!evt.target.todo.value)
        Add(evt.target.todo.value)
        setTodoItem('')
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="todo">new task: </label>
            <input name="todo" id="todo" value = {todoItem} placeholder= 'ex: clean floors' onChange={handleChange}></input>
            <input type="submit"></input>

        </form>
    )
}

export default NewTodoForm