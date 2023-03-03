import { useEffect, useState } from 'react'
import Title from './components/Title';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useStore } from './stores';

function App() {

  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className='container flex flex-col max-w-xl'>
        <Title />
        <Form />
        <TodoList />
      </div>
    </div>
  )
}

export default App
