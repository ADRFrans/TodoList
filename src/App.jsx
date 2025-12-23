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

  return (
    <>
      <div >
        <Header title="Todo App" />
        <p>Welcome to your Todo Application! 
          This will be the start of me manually learning react and vite using 
          openai codex that is directly linked to my main project directory to help 
          guide me through learning react.
        </p>
        <input value={newText} onChange={(e) =>
          setNewText(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        <section>
          <h2>Today</h2>
          <TodoList items={items} />
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
