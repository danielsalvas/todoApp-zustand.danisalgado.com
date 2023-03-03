import Todo from "../Todo/Todo";
import TodoCompleted from "../TodoCompleted/TodoCompleted";
import { useStore } from "../../stores";
import styles from './todolist.module.css'

const TodoList = () => {

  const { todos, completedTodos } = useStore(
    (state) => ({
      todos: state.todos,
      completedTodos: state.completedTodos
    })
  );

  return (
    <div className={styles.container_todos}>
      <div className={styles.container_todos_section}>
        <h1 className={styles.todo_title}>ACTIVE TASKS</h1>
        <div className={styles.todos_direction}>        
          { todos.map( (todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
      <div className={styles.container_todos_section}>
        <h1 className={styles.todo_title}>COMPLETED TASKS</h1>
          { Object.keys(completedTodos).length > 0 ? (
            <div className={styles.todos_direction}>
              { completedTodos.map( (todo) => (
              <TodoCompleted key={todo.id} todo={todo} />
              ))}
            </div>
          ) : (
            <div className={styles.temporal_completed_text}>
              Completed tasks will be displayed here...
            </div>
          )}
      </div>
    </div>
  )
}

export default TodoList
