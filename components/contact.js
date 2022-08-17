import Social from '/Users/takanoshoma/Desktop/tutorial/components/social.js'
import styles from '/Users/takanoshoma/Desktop/tutorial/styles/contact.module.css'

export default function Contact() {
    return (
        <div className={styles.stack}>
            <h3 className={styles.heading}> Contact</h3>
            <Social />
        <address>cube@web.mail.address</address>
        </div>
    )
}