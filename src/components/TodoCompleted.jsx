import { useStore } from "../stores";

const TodoCompleted = ( { todo }) => {

  const { handleSetUncompleted, handleDeleteCompleted } = useStore();
  const { id, data } = todo;

  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-solid border-gary-600">
      <div className="flex items-center">
        <div onClick={() => handleSetUncompleted(id)} className="cursor-pointer">
          <img className="h-6 w-6" src="/check.png" alt="" />
        </div>
        <div className="flex flex-col">
          <p className='pl-3 font-bold text-xl'>
            {data.title}
          </p>
          <p className='pl-3 line-through'>
            {data.description}
          </p>
          <p className='pl-3 line-through'>
            {data.date}
          </p>
        </div>
      </div>
      <img onClick={() => handleDeleteCompleted(id)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/close-icon.svg" alt="Close Icon" />
    </div>
  )
}

export default TodoCompleted
