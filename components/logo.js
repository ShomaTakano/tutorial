import Link from 'next/Link'
import styles from '/Users/takanoshoma/Desktop/tutorial/styles/logo.module.css'

export default function Logo({ boxOn = false }) {
    return (
        <Link href="/">
            <a className={boxOn ? styles.box : styles.basic}>CUBE</a>
        </Link>
    )
}