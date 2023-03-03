import Title from './components/Title/Title';
import ModalForm from './components/ModalForm/ModalForm';
import TodoList from './components/TodoList/TodoList';
import { useStore } from './stores';
import './App.css'

function App() {

  const { modal, todos, completedTodos } = useStore(
    (state) => ({
      modal: state.modal,
      todos: state.todos,
      completedTodos: state.completedTodos,
    })
  );

  const { setModal, setAnimationModal } = useStore();

  const handleNewTodo = () => {
    setModal(true)

    setTimeout(() => {
      setAnimationModal(true)
    }, 500);

    setAnimationModal(false)
  }

  return (
    <div className={`${modal ? 'fix_form' : ''} container_app`}>
      <Title />
      <div className='add_todo'>
        <h1 className='add_todo_title'>Let's <span className='text_green'>add</span> some tasks...</h1>
        <div className='button_container'>
          <button
            className='add_todo_button'
            onClick={handleNewTodo}
          >
            ADD NEW TASK
          </button>
        </div>
      </div>

      {modal && <ModalForm />}
      
      <TodoList />
    </div>
  )
}

export default App
