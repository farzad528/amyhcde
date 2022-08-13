import React from 'react'
import styles from './SubscribeTemplate.module.css'
import { useCountdown } from '../../hooks/useCountDown'
import FacebookIcon from '../icons/FacebookIcon'
import TweeterIcon from '../icons/TweeterIcon'
import EmailIcon from '../icons/EmailIcon'
import GiftIcon from '../icons/GiftIcon'

const SubscribeTemplate = ({ onNavClick }) => {
  // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000
  // const NOW_IN_MS = new Date().getTime()
  // const countDown = useCountdown(EVENT - NOW_IN_MS)

  const EVENT = new Date('08 November 2022 07:00 CST').getTime()

  const countDown = useCountdown(EVENT)
  return (
    <main className={styles.subscribeTemplateContainer}>
      <div className={styles.subscribeHeader}>
        <p onClick={() => console.log(countDown)}>
          Made with ❤️ by Amy’s supporters.️
        </p>

        <div>
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
        </div>
      </div>

      <div className={styles.logoWrapper}>
        <img src='images/logo.png' alt='amy hinojosa logo' />
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

      <div className={styles.subscribeContent}>
        <p className={styles.messageWrapper}>
          Support Amy Flores Hinojosa for your Harris County Department of
          Education Chair
        </p>
      </div>

      <div className={styles.mediasWrapper}>
        <a
          className={styles.mediaWrapper}
          href='https://www.facebook.com/amyforhcde'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FacebookIcon />
          <span>Facebook</span>
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
          <span>Email</span>
        </a>
        <a
          className={styles.mediaWrapper}
          href='https://secure.actblue.com/donate/amy-hinojosa-for-hcde'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GiftIcon />
          <span>Donate</span>
        </a>
      </div>
    </main>
  )
}

export default SubscribeTemplate
