import Header from "./components/Header"
import TodoList from "./components/TodoList"
import { useState } from "react"

function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React", complete: false },
    { id: 2, text: "Build a Todo App", complete: true },
    { id: 3, text: "Master Vite", complete: false }
  ])
  const [newText, setNewText] = useState("")

  function handleAdd() {
    if (newText.trim() === "") return;
    const newItem = {
      id: items.length + 1,
      text: newText,
      complete: false
    };
    setItems([...items, newItem]);
    setNewText("");
  }
  // Flip completed for the clicked item.
  function handleToggle(id) {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, complete: !item.complete }
          : item
      )
    )
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleEdit(id, newText) {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, text: newText }
          : item
      )
    )
  }

  return (
    <>
      <div >
        <Header title="Todo App" />
        <p>Welcome to your Todo Application! 
          This will be the start of me manually learning react and vite using 
          openai codex that is directly linked to my main project directory to help 
          guide me through learning react.
        </p>
        {/* 
          htmlFor is a makes the label associated with the input,
          so that clicking the label focuses the input.
        */}
        <label htmlFor="new-todo">
          Add a new task: 
        </label>
        <input 
          id="new-todo"
          value={newText} 
          onChange={(e) => setNewText(e.target.value)} 
          placeholder="Enter Todo here"
        />
        <button style={{ marginLeft: "10px" }} onClick={handleAdd}>Add</button>
        <section>
          <h2>Today</h2>
          <TodoList 
            items={items} 
            onToggle={handleToggle} 
            onDelete={handleDelete} 
            onEdit={handleEdit}
            />
        </section>    
        <section>
          <h2>Tomorrow</h2>
          <p>Tasks for tomorrow will go here.</p>
        </section>   
      </div>
    </>
  )
}

export default App
