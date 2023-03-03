import { useEffect, useState } from 'react'
import Title from './components/Title';
import ModalForm from './components/ModalForm/ModalForm';
import TodoList from './components/TodoList';
import { useStore } from './stores';

function App() {

  const { modal } = useStore(
    (state) => ({
      modal: state.modal
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
    <div className="">
      <div className=''>
        <Title />
        <button
          onClick={handleNewTodo}
        >
          Add new Todo
        </button>

        {modal && <ModalForm />}
        
        <TodoList />
      </div>
    </div>
  )
}

export default App
