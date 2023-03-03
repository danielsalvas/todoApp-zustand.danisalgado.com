import { create } from "zustand";

export const useStore = create((set, get) => ({
  todos: [
    {
      id: 1,
      title: 'Watch the next Marvel Movie',
      completed: false,
    },
    {
      id: 2,
      title: 'Record the next Video',
     completed: false,
    },
    {
      id: 3,
      title: 'Wash the dishes',
      completed: false,
    },
    {
      id: 4,
      title: 'Study 2 hours',
      completed: false,
    }
  ],
  title: "",
  completedTodos: [],
  setTodos: (newTodo) => set({ todos: newTodo }),
  setTitle: (newTitle) => set({ title: newTitle }),
  setCompletedTodos: (newCompletedTodos) => set({ completedTodos: newCompletedTodos }),
  addTodo: (title) => {

    const todos = get().todos
    const lastId = todos.length > 0 ? todos[todos.length -1].id : 1;
      
      const newTodo = {
        id: lastId + 1,
        title,
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

    const activeTodos = todos.concat(newTodos)

    get().setTodos(activeTodos)
    get().setCompletedTodos(filteredTodos)
  },
  handleDelete: (id) => {

    const todos = get().todos
    const updatedList = todos.filter( todo => todo.id !== id)
    get().setTodos(updatedList)
  },
  handleDeleteCompleted: (id) => {

    const todos = get().completedTodos
    const updatedList = todos.filter( todo => todo.id !== id)
    get().setCompletedTodos(updatedList)
  }
}));