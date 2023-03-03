import { useEffect, useState } from 'react'
import Title from './components/Title/Title';
import ModalForm from './components/ModalForm/ModalForm';
import TodoList from './components/TodoList/TodoList';
import { useStore } from './stores';
import './App.css'

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
    <div className={`${modal ? 'fix_form' : ''} container_app`}>
      <Title />
      <button
        onClick={handleNewTodo}
      >
        Add new Todo
      </button>

      {modal && <ModalForm />}
      
      <TodoList />
    </div>
  )
}

export default App
