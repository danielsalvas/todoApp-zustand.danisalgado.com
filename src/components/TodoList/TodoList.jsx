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
        { todos.map( (todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <div className={styles.container_todos_section}>
        { completedTodos.map( (todo) => (
          <TodoCompleted key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default TodoList
