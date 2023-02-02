

function Todo({item, deleteTodo}) {
    
    return (
        <li className="TodoItem">
            {item.task}
            <button onClick = {() =>deleteTodo(item.id)}>delete</button>
        </li>
    )
}

export default Todo