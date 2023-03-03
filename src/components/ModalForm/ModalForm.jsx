import { useStore } from '../../stores'
import { useForm } from 'react-hook-form'
import styles from './modalform.module.css'
import close from '../../img/close.svg'

const ModalForm = () => {

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();

  const { animationModal } = useStore(
    (state) => ({
      animationModal: state.animationModal
    })
  );

  const { addTodo, setModal, setAnimationModal } = useStore();

  const onSubmit = dataForm => {
    addTodo(dataForm)
    setAnimationModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  };

  const hideModal = () => {
    setAnimationModal(false)
    
    setTimeout(() => {
      setModal(false)
    }, 500);
  }
  
  return (
    <div className={styles.modal}>
      <div className={styles.close_modal}>
        <img src={close} alt="close" onClick={hideModal} />
      </div>

        {/* FORM */}

      <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} ${animationModal ? styles['animation'] :  styles['close']}`}>

        <legend>ADD NEW TODO</legend>

        {/* TITLE */}

        <div className={styles.field}>
          <p >TITLE *</p>
          <input
            type="text"
            placeholder="Title"
            {...register("title", {
              required: true,
              maxLength: 80
            })}
          />

          {errors.title && 
            <span className={styles.error}>
              {errors.title.type === 'required' && 'This field is required'}
              {errors.title.type === 'maxLength' && 'Max length of name is 80 Char'}
            </span>  
          }
        </div>

        

        {/* DESCRIPTION */}

        <div className={styles.field}>
          <p >DESCRIPTION *</p>
          <input
            type="text"
            placeholder="Description"
            {...register("description", {
              required: true,
              maxLength: 200
            })}
          />

          {errors.description && 
            <span className={styles.error}>
              {errors.description.type === 'required' && 'This field is required'}
              {errors.description.type === 'maxLength' && 'Max length of name is 200 Char'}
            </span>  
          }
        </div>

        {/* ASSIGNED */}

        <div className={styles.field}>
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
            <span className={styles.error}>
              {errors.assigned.type === 'required' && 'This field is required'}
              {errors.assigned.type === 'maxLength' && 'Max length of name is 200 Char'}
            </span>  
          }
        </div>

        {/* DUE DATE */}

        <div className={styles.field}>
          <p >DUE DATE *</p>
          <input
            type="date"
            min= '2023-01-01'
            placeholder="DUE DATE"
            {...register("date", {
              required: true,
              maxLength: 200
            })}
          />

          {errors.date && 
            <span className={styles.error}>
              {errors.date.type === 'required' && 'This field is required'}
            </span>  
          }
        </div>

        {/* SUBMIT */}

        <div>
          <input type="submit" value="Add Todo" />
        </div>
      </form>
    </div>
  )
}

export default ModalForm
