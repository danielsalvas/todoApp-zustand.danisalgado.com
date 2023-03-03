import { useEffect, useState } from 'react'
import Title from './components/Title';
import ModalForm from './components/ModalForm';
import TodoList from './components/TodoList';
import { useStore } from './stores';

function App() {

  const handleNewTodo = () => {

  }

  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className='container flex flex-col max-w-xl'>
        <Title />
        <button
          onClick={handleNewTodo}
        >
          Add new Todo
        </button>
        <ModalForm />
        <TodoList />
      </div>
    </div>
  )
}

export default App
