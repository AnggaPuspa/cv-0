import styles from '../styles/project.module.css'

export default function Project() {
  return (
    <div className={styles.project} id="Project">
      <div className={styles.title}>
        <p> My Project </p>
        <div className={styles.splash}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.ornamen}></div>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.box}>
              <div className={styles.img}></div>
              <div className={styles.content_box}>
                <p> Planet Edukasi </p>
                <p> This website was created to participate in the <b>INVENTION 2022</b>, web competition held by <b>Udayana University</b>, and made by Bocah TI Team.</p>
                <a href="https://planetedukasi.netlify.app/" target='_blank'>
                <button className={styles.cta}>
                  <span>Visit</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>             
              </a>
             </div>
            </div>
            <div className={styles.box}>
              <div className={styles.img}></div>
              <div className={styles.content_box}>
                <p> Medicare </p>
                <p> This website was created to participate in the <b>INFINITY 2022</b>, an individual web competition held by <b>ITB STIKOM Bali University.</b> </p>
                <a href="https://medicare-2.netlify.app/" target='_blank'>
                <button className={styles.cta}>
                  <span>Visit</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>             
              </a>
              </div>
            </div>
          </div>
          <div className={styles.row}>
          <div className={styles.box}>
              <div className={styles.img}></div>
              <div className={styles.content_box}>
                <p> Ricoffee </p>
                <p> This website was created for the school project </p>
                <a href="https://ricoffee.netlify.app/" target='_blank'>
                <button className={styles.cta}>
                  <span>Visit</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>             
              </a>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.img}></div>
              <div className={styles.content_box}>
                <p> TraveLin </p>
                <p> This website was created for the school project </p>
                <a href="https://travelin-2.netlify.app/" target='_blank'>
                <button className={styles.cta}>
                  <span>Visit</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>      
              </a>       
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
