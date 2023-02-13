import styles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contact}>
        <div className={styles.wm}>
                <div className={styles.footer}> Copyright <div className={styles.icon_2}></div>2023 Raditya. All Right Reserved. </div>
                <p> Build with <a href="https://nextjs.org/" className={styles.links}>Next.js</a> </p>
        </div>
        <div className={styles.top}>
            <div className={styles.title_box}>
                <p className={styles.title}> Get in touch.. </p>
                <p> Contact </p>
            </div>
        </div>
        <div className={styles.center}>
            <div className={styles.kotak}>
                <a href="mailto:radityasutha@gmail.com" className={styles.a}>
                <div className={styles.icon}></div>
                <p> Radityasutha@gmail.com </p>
                </a>
            </div>
            <div className={styles.kotak}>
                <a href="https://wa.wizard.id/f3abc8" className={styles.a}> 
                <div className={styles.icon}></div>
                <p> +62881037125523 </p>
                </a>
            </div>
            <div className={styles.kotak}>
                <a href="https://goo.gl/maps/UJEvLu5LqhUqdB6s5" className={styles.a}> 
                <div className={styles.icon}></div>
                <p> Br Taman Sari, Pandak <br></br> Gede, Kediri, Tabanan </p>
                </a>
            </div>
        </div>
        <div className={styles.bott}>
            <div className={styles.medsos_box}>
                <div className={styles.medsos}></div>
                <div className={styles.medsos}></div>
                <div className={styles.medsos}></div>
            </div>
        </div>
    </div>
  )
}
