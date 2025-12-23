 function TodoItem({ text, completed, onToggle }) {
    return (
      <li>
        {text}
        {/* Checkbox triggers the parent toggle handler. */}
        <input 
            type="checkbox" 
            checked={completed}
            onChange={onToggle} />
      </li>
    )
  }

export default TodoItem;
