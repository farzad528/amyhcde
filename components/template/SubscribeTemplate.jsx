import React from 'react'
import Image from 'next/image'
import styles from './SubscribeTemplate.module.css'
import { useCountdown } from '../../hooks/useCountDown'
import FacebookIcon from '../icons/FacebookIcon'
import TweeterIcon from '../icons/TweeterIcon'
import EmailIcon from '../icons/EmailIcon'
import GiftIcon from '../icons/GiftIcon'
import AmyHero from '../../assets/amyHero.png'

const SubscribeTemplate = ({ onNavClick }) => {
  // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000
  // const NOW_IN_MS = new Date().getTime()
  // const countDown = useCountdown(EVENT - NOW_IN_MS)

  const EVENT = new Date('08 November 2022 07:00 CST').getTime()

  const heroImageScale = 0.8

  const countDown = useCountdown(EVENT)
  return (
    <main className={styles.subscribeTemplateContainer}>
      {/* header */}
      <div className={styles.subscribeHeader}>
        <p className={styles.subscribeHeaderLabel}>AmyHinojosa</p>

        {/* <div>
          <p className={styles.navLink} onClick={() => onNavClick('about')}>
            About
          </p>
          <p className={styles.navLink} onClick={() => onNavClick('values')}>
            Values
          </p>
          <p
            className={styles.navLink}
            onClick={() => onNavClick('accomplishments')}
          >
            Accomplishments
          </p>
          <p className={styles.navLink} onClick={() => onNavClick('stake')}>
            What’s at Stake?
          </p>
        </div> */}

        <div className={styles.mediasWrapper}>
          <a
            className={styles.mediaWrapper}
            href='https://www.facebook.com/amyforhcde'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FacebookIcon />
          </a>
          {/* <a className={styles.mediaWrapper} href='https://google.com'>
          <TweeterIcon />
          <span>Tweet</span>
        </a> */}
          <a
            className={styles.mediaWrapper}
            href='mailto: amyforhcde@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <EmailIcon />
          </a>
          <a
            className={styles.mediaWrapper}
            href='https://secure.actblue.com/donate/amy-hinojosa-for-hcde'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GiftIcon />
          </a>
        </div>
      </div>

      <div className={styles.mainContent}>
        {/* LEFT */}
        <div className={styles.leftSide}>
          <div className={styles.causeText}>
            <h2>Elevate Students, Elevate Families, Elevate Generations</h2>
            <p>
              Support Amy Hinojosa for your Harris County School Trustee,
              Position 1 Precinct 2
            </p>
            <a
              className={styles.donateButton}
              href='https://secure.actblue.com/donate/amy-hinojosa-for-hcde'
              target='_blank'
              rel='noopener noreferrer'
            >
              Donate
            </a>
          </div>

          <div className={styles.counterWrapper}>
            <h2>VOTING STARTS:</h2>

            <div>
              <div className={styles.counterNumberDay}>
                <p className={styles.counterNumber}>{countDown.days}</p>
                <p className={styles.counterName}>Days</p>
              </div>
              <span>:</span>
              <div className={styles.counterNumberDay}>
                <p className={styles.counterNumber}>{countDown.hours}</p>
                <p className={styles.counterName}>Hours</p>
              </div>
              <span>:</span>
              <div className={styles.counterNumberDay}>
                <p className={styles.counterNumber}>{countDown.minutes}</p>
                <p className={styles.counterName}>Minutes</p>
              </div>
              <span>:</span>
              <div className={styles.counterNumberDay}>
                <p className={styles.counterNumber}>{countDown.seconds}</p>
                <p className={styles.counterName}>Seconds</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.rightSide}>
          <Image
            src={AmyHero}
            height={789 * heroImageScale}
            width={354 * heroImageScale}
            className={styles.nextImage}
          />
        </div>
      </div>
    </main>
  )
}

export default SubscribeTemplate
