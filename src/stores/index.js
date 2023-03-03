import { create } from "zustand";
import Swal from "sweetalert2";

export const useStore = create((set, get) => ({
  todos: [
    {
      id: 1,
      data: {
        title: 'Navbar Design',
        description: 'We have to fix the design',
        assigned: 'David Alejandro',
        date: '03/30/2023'
      },
      completed: false,
    },
    {
      id: 2,
      data: {
        title: 'Responsive Mobile',
        description: 'The client shows us a bug in mobile',
        assigned: 'Daniel Salgadp',
        date: '03/25/2023'
      },
      completed: false,
    },
    {
      id: 3,
      data: {
        title: 'Product Page',
        description: 'Update de description design in mobile',
        assigned: 'Marcela Alejandra',
        date: '03/20/2023'
      },
      completed: false,
    },
    {
      id: 4,
      data: {
        title: 'Figma Design',
        description: 'Figma design needs to be fix ASAP',
        assigned: 'Andrea Castillo',
        date: '03/15/2023'
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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        const updatedList = todos.filter( todo => todo.id !== id)
        get().setTodos(updatedList)
      }
    }) 
  },
  handleDeleteCompleted: (id) => {

    const todos = get().completedTodos
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        const updatedList = todos.filter( todo => todo.id !== id)
        get().setCompletedTodos(updatedList)
      }
    }) 
  }
}));