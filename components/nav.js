import Link from 'next/link'
import styles from '/Users/takanoshoma/Desktop/tutorial/styles/nav.module.css'

// Chapter5.8用のインポート <a>Home</a>
import { FontAwesomeIcon } from '/Users/takanoshoma/Desktop/tutorial/node_modules/@fortawesome/react-fontawesome'
import { faHouceChimny } from '/Users/takanoshoma/Desktop/tutorial/node_modules/@fortawesome/free-solid-svg-icons'

export default function Nav() {
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link href="/">
                        <a><FontAwesomeIcon icon={faHouceChimny} /> Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}