import styles from '/Users/takanoshoma/Desktop/tutorial/styles/container.module.css'

export default function Container({ children, large = false}) {
    return (
        <div className={large ? styles.large : styles.default}>
            {children}
        </div>
    )
}