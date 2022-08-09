import styles from '/Users/takanoshoma/Desktop/tutorial/styles/post-body.module.css'

export default function PostBody({ children }) {
    return (
        <div className={styles.stack}>
            {children}
        </div>
    )
}