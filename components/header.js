import Logo from '/Users/takanoshoma/Desktop/tutorial/components/logo'
import Nav from '/Users/takanoshoma/Desktop/tutorial/components/nav'
import styles from '/Users/takanoshoma/Desktop/tutorial/styles/header.module.css'

export default function Header() {
    return (
        <header>
            <div className={styles.flexContainer}>
                <Logo boxOn />
                <Nav /> 
            </div>
        </header>
    )
}