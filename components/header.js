import Container from '/Users/takanoshoma/Desktop/tutorial/components/container'
import Logo from '/Users/takanoshoma/Desktop/tutorial/components/logo'
import Nav from '/Users/takanoshoma/Desktop/tutorial/components/nav'
import styles from '/Users/takanoshoma/Desktop/tutorial/styles/header.module.css'

export default function Header() {
    return (
        <header>
            <Container large>
                <div className={styles.flexContainer}>
                    <Logo boxOn />
                    <Nav /> 
                </div>
            </Container>
        </header>
    )
}