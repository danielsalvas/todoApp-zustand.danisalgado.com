import { useStore } from "../../stores"
import styles from "./todo.module.css"

const Todo = ( { todo }) => {

  const { handleSetCompleted, handleDelete, formatDate } = useStore();
  const { id, data } = todo;

  return (
    <div className={styles.container_todo}>
      <div className={styles.container_todo_center}>
        <span onClick={() => handleSetCompleted(id)} className={styles.checkbox}></span>    
        <div className={styles.column_data}>
          <p className={styles.title_data}>
            {data.title}
          </p>
          <p className={styles.padding_data}>
            {data.description}
          </p>
          <p className={styles.padding_data_section}>
          <span>Assigned: </span> {data.assigned}
          </p>
          <p className={styles.padding_data}>
            <span>Due Date: </span>{formatDate(data.date)}
          </p>
          
        </div>
      </div>
      <div>
        <img onClick={() => handleDelete(id)} className={styles.trash_deleted} src="/trash-icon.svg" alt="Close Icon" />
      </div>
    </div>
  )
}

export default Todo
