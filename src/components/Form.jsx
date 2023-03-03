import { useStore } from '../stores'
import { useForm } from 'react-hook-form'

const Form = () => {

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();

  const { addTodo } = useStore();

  const onSubmit = dataForm => {

    addTodo(dataForm)
  };
  
  return (
    <div className="container">
      <div className='row'>

        {/* FORM COLUMN */}

        <div className='column'>
          <div className='left-half'>
            <h1>Contact Us</h1>
            <p>We're open for any suggestion or just to have a chat.</p>

            <form onSubmit={handleSubmit(onSubmit)}>

              {/* TITLE */}

              <p >Title *</p>
              <input
                type="text"
                placeholder="title"
                {...register("title", {
                  required: true,
                  maxLength: 80
                })}
              />

              {errors.title && 
                <span className='error'>
                  {errors.title.type === 'required' && 'This field is required'}
                  {errors.title.type === 'maxLength' && 'Max length of name is 80 Char'}
                </span>  
              }

              {/* DESCRIPTION */}

              <p >Description *</p>
              <input
                type="text"
                placeholder="Description"
                {...register("description", {
                  required: true,
                  maxLength: 200
                })}
              />

              {errors.description && 
                <span className='error'>
                  {errors.description.type === 'required' && 'This field is required'}
                  {errors.description.type === 'maxLength' && 'Max length of name is 200 Char'}
                </span>  
              }

              {/* ASSIGNED */}

              <p >ASSIGNED *</p>
              <input
                type="text"
                placeholder="Assigned"
                {...register("assigned", {
                  required: true,
                  maxLength: 200
                })}
              />

              {errors.assigned && 
                <span className='error'>
                  {errors.assigned.type === 'required' && 'This field is required'}
                  {errors.assigned.type === 'maxLength' && 'Max length of name is 200 Char'}
                </span>  
              }

              {/* Submit  */}

              <div>
                <input type="submit" className="submit" value="Add Todo" />
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Form
