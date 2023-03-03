import { useStore } from "../stores"

const Todo = ( { todo }) => {

  const { handleSetCompleted, handleDelete } = useStore();
  const { id, data } = todo;

  const formatDate = (date) => {

    let newDate = new Date(date);

    const day = newDate.getDate().toString().padStart(2, "0");
    const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const year = newDate.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-solid border-gary-600">
      <div className="flex items-center">
        <span onClick={() => handleSetCompleted(id)} className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"></span>    
        <div className="flex flex-col">
          <p className='pl-3 font-bold text-xl'>
            {data.title}
          </p>
          <p className='pl-3'>
            {data.description}
          </p>
          <p className='pl-3'>
            {formatDate(data.date)}
          </p>
        </div>
      </div>
      <img onClick={() => handleDelete(id)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/close-icon.svg" alt="Close Icon" />
    </div>
  )
}

export default Todo
