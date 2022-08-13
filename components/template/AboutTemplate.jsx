import Image from 'next/image'
import React from 'react'
import styles from './AboutTemplate.module.css'
import AmyAbout from '../../assets/amyAbout.png'
import AmyValues from '../../assets/amyValues.png'
import AmyAccomp from '../../assets/amyAccomp.png'
import AmySupport from '../../assets/amySupport.png'

const AboutTemplate = () => {
  return (
    <section className={styles.aboutTemplateContainer}>
      <div className={styles.sectionTrack} id='about-id'>
        <div className={styles.nextImgWrapper}>
          <Image src={AmyAbout} height={400} className={styles.nextImage} />
        </div>
        <div className={styles.sectionCard}>
          <p>ABOUT</p>
          <h2>It all started with a spark.</h2>
          <p>
            Now we’re the biggest party of the country, however, all has started
            with a small idea of help, and we still fight for it.
          </p>
        </div>
      </div>

      <div className={styles.sectionTrack} id='values-id'>
        <div className={styles.sectionCard}>
          <p>VALUES</p>
          <h2>“Be who you needed, when you were young”.</h2>
          <p>
            Now we’re the biggest party of the country, however, all has started
            with a small idea of help, and we still fight for it.
          </p>
        </div>
        <div className={styles.nextImgWrapper}>
          <Image src={AmyValues} height={400} className={styles.nextImage} />
        </div>
      </div>

      <div className={styles.sectionTrack} id='accomplishments-id'>
        <div className={styles.nextImgWrapper}>
          <Image src={AmyAccomp} height={400} className={styles.nextImage} />
        </div>

        <div className={styles.sectionCard}>
          <p>ACCOMPLISHMENTS</p>
          <h2>Growth</h2>
          <p>
            Now we’re the biggest party of the country, however, all has started
            with a small idea of help, and we still fight for it.
          </p>
        </div>
      </div>

      <div className={styles.sectionTrack} id='stake-id'>
        <div className={styles.sectionCard}>
          <p>WHAT’S AT STAKE?</p>
          <h2>Support</h2>
          <p>
            Now we’re the biggest party of the country, however, all has started
            with a small idea of help, and we still fight for it.
          </p>
        </div>
        <div className={styles.nextImgWrapper}>
          <Image src={AmySupport} height={400} className={styles.nextImage} />
        </div>
      </div>
    </section>
  )
}

export default AboutTemplate
