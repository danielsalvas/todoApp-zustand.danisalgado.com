import Todo from "./Todo";
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
    </div>
  )
}

export default TodoList
