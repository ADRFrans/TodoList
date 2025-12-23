import styles from "./Styles/Todo.module.css";

function TodoItem({ text, completed, onToggle, onDelete, onEdit }) {
  // let label = "";
  // function flipper(checked){
  //   if(checked == true){
  //     label = "Complete"
  //   }
  //   else{
  //     label = "Not Complete" 
  //   }
  //   return label;
  // }

  return (
    <li>
      <button className={styles.deleteButton} onClick={onDelete}>X</button>
      {text}
      {/*
        ? and : are ternary operators 
        condition ? valueIfTrue : valueIfFalse
        so if complete is true, it shows the first value, otherwise it shows the second
      */}

      {/* Checkbox triggers the parent toggle handler. */}
      <label className={completed ? styles.complete : styles.notComplete}>
        {completed ? "Complete" : "Not Complete"}
      </label>
      <input 
      type="checkbox" 
      className={styles.checkBox}
      checked={completed}
      onChange={onToggle} />
      <button className={styles.crudButtons} onClick={onEdit}>Edit</button>
      <button className={styles.crudButtons}>Save</button>
    </li>
  )
}

export default TodoItem;
