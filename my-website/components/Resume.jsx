import styles from '../styles/resume.module.css'
import Image from 'next/image'

export default function Resume() {
  return (
    <div className={styles.resume}>
        <div className={styles.container}>
            <div className={styles.title_2}>
                <p> My Resume </p>
                <div className={styles.ornamen}></div>
            </div>
            <div className={styles.left_content}>
                <div className={styles.education_box}>
                <div className={styles.kotak}>
                   <div className={styles.year}>
                        <p> 2012- 2018 </p>
                    </div> 
                   <div className={styles.details}>
                        <div className={styles.marker}></div>
                        <div className={styles.description}>
                            <p> SDN 3 Pandak Gede </p>
                            <p> Pandak Gede, Kec. Kediri, Kabupaten Tabanan </p>
                        </div>
                   </div>
                </div>
                <div className={styles.kotak}>
                   <div className={styles.year}>
                        <p> 2018 - 2021 </p>
                    </div> 
                   <div className={styles.details}>
                        <div className={styles.marker}></div>
                        <div className={styles.description}>
                            <p> SMPN 3 Kediri </p>
                            <p> Beraban, Kec. Kediri, Kabupaten Tabanan </p>
                        </div>
                   </div>
                </div>
                <div className={styles.kotak}>
                   <div className={styles.year}>
                        <p> 2021 - Now </p>
                    </div> 
                   <div className={styles.details}>
                        <div className={styles.marker}></div>
                        <div className={styles.description}>
                            <p> SMK TI Bali Global Badung </p>
                            <p> Jl. Tibung Sari No.1X, Dalung, Kec. Kuta Utara, Kabupaten Badung, </p>
                        </div>
                   </div>
                </div>
                </div>
            </div>
            <div className={styles.right_content}>
                <div className={styles.resume_ornamen}></div>
                <div className={styles.title_box}>
                    <div className={styles.left}>
                        <p> Education </p>
                        <div className={styles.splash}></div>
                    </div> 
                    <div className={styles.center}></div>
                    <div className={styles.right}>
                        <p> Abilities </p>
                        <div className={styles.ornamen}></div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.text_content}>
                        <div className={styles.col}>
                            <div className={styles.details_2}>
                                <p> 1. </p>
                                <p> Responsive </p>
                            </div>
                            <div className={styles.details_2}>
                                <p> 2. </p>
                                <p> Time Discipline </p>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.details_2}>
                                <p> 3. </p>
                                <p> Responsible </p>
                            </div>
                            <div className={styles.details_2}>
                                <p> 4. </p>
                                <p> Fast Learner </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.achievement}>
                        <div className={styles.title}>
                            <p> Achievement </p>
                        </div>
                        <div className={styles.desc}>
                            <p> INFINITY 2022 (Contest) - Web Design </p>
                            <p> First Place / Winner </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
