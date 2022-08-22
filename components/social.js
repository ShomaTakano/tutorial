import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from 'node_modules/@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebookF,
    faGithub,
} from '/Users/takanoshoma/Desktop/tutorial/node_modules/@fortawesome/free-brands-svg-icons'

export default function Social({iconSize = 'initial' }) {
    return (
        <ul className={styles.list} style={{ '--icon-size': iconSize }}>
            <li>
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className="sr-only">Twitter</span>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span className="sr-only">Facebook</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/">
                    <FontAwesomeIcon icon={faGithub} />
                    <span claasName="sr-only">Github</span>
                </a>
            </li>
        </ul>
    )
}