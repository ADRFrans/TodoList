import TodoItem from "./TodoItem";

function TodoList({items, onToggle, onDelete, onEdit}) {
    return (
        <ul>
            {items.map((item) => (
                /* Pass the item id back up when toggling. */
                <TodoItem 
                key={item.id} 
                text={item.text} 
                completed={item.complete} 
                onToggle={() => onToggle(item.id)}
                onDelete={() => onDelete(item.id)}
                onEdit={() => onEdit(item.id, item.text)}
                />
            ))}
        </ul>
    )
}
export default TodoList;
