function TodoItem({text, completed}) {
    return (
        <li>{text} <input type="checkbox" checked={completed} readOnly /></li>
    )
}

export default TodoItem;