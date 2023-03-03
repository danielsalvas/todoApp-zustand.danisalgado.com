import Todo from "./Todo";
import TodoCompleted from "./TodoCompleted";
import { useStore } from "../stores";

const TodoList = () => {

  const { todos, completedTodos } = useStore(
    (state) => ({
      todos: state.todos,
      completedTodos: state.completedTodos
    })
  );

  return (
    <div>
      <div className='flex flex-col mt-7 rounded-xl overflow-hidden shadow-2xl'>
        { todos.map( (todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <div className='flex flex-col mt-7 rounded-xl overflow-hidden shadow-2xl'>
        { completedTodos.map( (todo) => (
          <TodoCompleted key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default TodoList
