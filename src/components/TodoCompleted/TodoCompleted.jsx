import { useStore } from "../../stores";
import styles from './todocompleted.module.css'

const TodoCompleted = ( { todo }) => {

  const { handleSetUncompleted, handleDeleteCompleted, formatDate } = useStore();
  const { id, data } = todo;

  return (
    <div className={styles.container_todo}>
      <div className={styles.container_todo_center}>
        <div onClick={() => handleSetUncompleted(id)} className="cursor-pointer">
          <img className={styles.checkbox} src="/check.png" alt="" />
        </div>
        <div className={styles.column_data} >
          <p className={styles.title_data} >
            {data.title}
          </p>
          <p className={styles.padding_data_completed}>
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
      <img onClick={() => handleDeleteCompleted(id)} className={styles.trash_deleted} src="/trash-icon.svg" alt="Close Icon" />
    </div>
  )
}

export default TodoCompleted
