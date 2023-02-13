import styles from '../styles/about.module.css'


export default function about() {
  return (
    <div className={styles.about}  id="about">
      <div className={styles.container}>
        <div className={styles.left_content}>
          <div className={styles.img_box}>
            <div className={styles.xd}></div>
            <div className={styles.ps}></div>
            <div className={styles.figma}></div>
            <div className={styles.ai}></div>
            <div className={styles.img_content}>
              <div className={styles.about_ornamen}></div>
            </div>
          </div>
        </div>
        <div className={styles.right_content}>
          <div className={styles.wave}></div>
          <div className={styles.subtitle}>
            <p>ABOUT ME</p>
            <div className={styles.splash}></div>
          </div>
          <div className={styles.title}>
            <p> Hi, Here Is About Me </p>
          </div>
          <div className={styles.description}>
            <p> Hi there - My name is I Made Sutha Raditya, I'm usually called Sutha, designing is my passion, I love the process of designing an interface, I'm a student of SMK TI BALI GLOBAL Badung, I'm currently an intern at PT Taksu Teknologi Indonesia. </p>
          </div>
          <a href="https://drive.google.com/file/d/1eAom4tnwbtBfrUzmpmx0K_n-ChdyfvbL/view?usp=share_link" target='_blank'>
          <div className={styles.btn}>
            <div className={styles.icon}></div>
            <p> Download CV </p>
          </div>
          </a>
        </div>
      </div>
    </div>
  )
}
