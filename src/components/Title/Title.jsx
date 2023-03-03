import styles from './title.module.css'

const Title = () => {
  return (
    <div>
      <h1 className={styles.title}>
        Todo <span className={styles.color_title}>App</span>
      </h1>
    </div>
  )
}

export default Title
