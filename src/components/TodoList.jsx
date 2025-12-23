import TodoItem from "./TodoItem";

function TodoList({items, onToggle}) {
    return (
        <ul>
            {items.map((item) => (
                /* Pass the item id back up when toggling. */
                <TodoItem 
                key={item.id} 
                text={item.text} 
                completed={item.complete} 
                onToggle={() => onToggle(item.id)}
                />
            ))}
        </ul>
    )
}
export default TodoList;
