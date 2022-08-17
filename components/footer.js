import Container from '/Users/takanoshoma/Desktop/tutorial/components/container'
import Logo from '/Users/takanoshoma/Desktop/tutorial/components/logo'
import Social from '/Users/takanoshoma/Desktop/tutorial/components/social.js'
import styles from '/Users/takanoshoma/Desktop/tutorial/styles/footer.module.css'
export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <Logo />
                    <Social />
                </div>
            </Container>
         </footer>
    )
}