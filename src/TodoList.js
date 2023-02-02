import NewTodoForm from './NewTodoForm.js'
import Todo from './Todo'
import { useState } from 'react'

function TodoList () {
    const [listItems, setListItems] = useState([{task: 'walk dog', id:1}, {task: 'do dishes', id:2}])
    const [idKey, setIdKey] = useState(3)

    const addTodo = (newItem) => {
        setListItems((prevItems) => (
            [...prevItems, {task: newItem, id:idKey}]
        ))
        setIdKey(idKey+1)
    }

    const deleteItemByID = (ID) => {
        setListItems((list) =>(
            list.filter((item) => item.id != ID)
        ))
    }
    
    return (
        <div className='TodoList'>
            <NewTodoForm Add = {addTodo}/>

            <ul>
                {listItems.map( (item) => <Todo deleteTodo = {deleteItemByID} key={item.id} item = {item} />)}
                
            </ul>

            
        </div>
    )
}

export default TodoList