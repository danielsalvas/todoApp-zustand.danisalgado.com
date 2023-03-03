import { useStore } from "../stores"

const Todo = ( { todo }) => {

  const { handleSetCompleted, handleDelete } = useStore();
  const { id, title, completed } = todo;

  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-solid border-gary-600">
      <div className="flex items-center">
        { completed ? (
          <div onClick={() => handleSetCompleted(id)} className="cursor-pointer">
            <img className="h-6 w-6" src="/check.png" alt="" />
          </div>
        ) : (
          <span onClick={() => handleSetCompleted(id)} className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"></span>
        )}
        
        <p className={`pl-3 ${completed && "line-through"}`}>
          {title}
        </p>
      </div>
      <img onClick={() => handleDelete(id)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/close-icon.svg" alt="Close Icon" />
    </div>
  )
}

export default Todo
