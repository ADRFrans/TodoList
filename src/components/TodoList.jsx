import TodoItem from "./TodoItem";

function TodoList({items}) {
    return (
        <ul>
            {items.map((item) => (
                <TodoItem key={item.id} text={item.text} completed={item.complete}/>
            ))}
        </ul>
    )
}
export default TodoList;