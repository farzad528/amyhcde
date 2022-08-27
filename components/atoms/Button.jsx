import styles from './Button.module.css'

const Button = ({ children }) => (
  <button className={styles.buttonContainer}>{children}</button>
)

export default Button
