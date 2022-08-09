import Logo from '/Users/takanoshoma/Desktop/tutorial/components/logo'
import styles from '/Users/takanoshoma/Desktop/tutorial/styles/footer.module.css'
export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.flexContainer}>
                <Logo />
                [ソーシャル]
            </div>
         </footer>
    )
}