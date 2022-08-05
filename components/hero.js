import styles from '/Users/takanoshoma/Desktop/tutorial/styles/hero.module.css'
export default function Hero({ title, subtitle, imageOn = false }) {
    return (
        <div className={styles.textPastel}>
        <h1 className={styles.title}>CUBE</h1>
        <p className={styles.subtitle}>
          アウトプットしていくサイト
        </p>
      </div>
    )
}