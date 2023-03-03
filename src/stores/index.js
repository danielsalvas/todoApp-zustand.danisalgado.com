import { create } from "zustand";

export const useStore = create((set, get) => ({
  todos: [
    {
      id: 1,
      data: {
        title: 'Navbar Design',
        description: 'We have to fix the design',
        assigned: 'David Alejandro',
        date: '10/03/2023'
      },
      completed: false,
    },
    {
      id: 2,
      data: {
        title: 'Responsive Mobile',
        description: 'The client shows us a bug in mobile',
        assigned: 'Daniel Salgadp',
        date: '20/03/2023'
      },
      completed: false,
    },
    {
      id: 3,
      data: {
        title: 'Product Page',
        description: 'Update de description design in mobile',
        assigned: 'Marcela Alejandra',
        date: '25/03/2023'
      },
      completed: false,
    },
    {
      id: 4,
      data: {
        title: 'Figma Design',
        description: 'Figma design needs to be fix ASAP',
        assigned: 'Andrea Castillo',
        date: '25/03/2023'
      },
      completed: false,
    }
  ],
  completedTodos: [],
  setTodos: (newTodo) => set({ todos: newTodo }),
  setCompletedTodos: (newCompletedTodos) => set({ completedTodos: newCompletedTodos }),
  addTodo: (data) => {

    const todos = get().todos
    const lastId = todos.length > 0 ? todos[todos.length -1].id : 1;
      
      const newTodo = {
        id: lastId + 1,
        data,
        completed: false
      }
  
      const todoList = [...todos]
      todoList.push(newTodo)
  
      get().setTodos(todoList);
  },
  handleSetCompleted: (id) => {

    const todos = get().todos
    const completed = get().completedTodos
    const updatedList = todos.map( todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed}
      }

      return todo;
    })

    const activeTodos = updatedList.filter(todo => todo.completed === false)
    const filteredTodos = updatedList.filter(todo => todo.completed === true)

    const completedTodos = completed.concat(filteredTodos)

    get().setTodos(activeTodos)
    get().setCompletedTodos(completedTodos)
  },
  handleSetUncompleted: (id) => {

    const todos = get().todos
    const completed = get().completedTodos
    const updatedList = completed.map( todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed}
      }

      return todo;
    })

    const newTodos = updatedList.filter(todo => todo.completed === false)
    const filteredTodos = updatedList.filter(todo => todo.completed === true)

    const activeTodos = newTodos.concat(todos)

    get().setTodos(activeTodos)
    get().setCompletedTodos(filteredTodos)
  },
  handleDelete: (id) => {

    const todos = get().todos
    const result = confirm('Do you want to delete the task?') 

    if (result) {
      const updatedList = todos.filter( todo => todo.id !== id)
      get().setTodos(updatedList)
    }  
  },
  handleDeleteCompleted: (id) => {

    const todos = get().completedTodos
    const result = confirm('Do you want to delete the task?') 

    if (result) {
      const updatedList = todos.filter( todo => todo.id !== id)
      get().setCompletedTodos(updatedList)
    }
  }
}));