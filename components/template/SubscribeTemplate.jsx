import React from 'react'
import styles from './SubscribeTemplate.module.css'
import FacebookIcon from '../icons/FacebookIcon'
import TweeterIcon from '../icons/TweeterIcon'
import EmailIcon from '../icons/EmailIcon'
import DonateIcon from '../icons/DonateIcon'

const SubscribeTemplate = ({ onNavClick }) => (
  <main className={styles.subscribeTemplateContainer}>
    <div className={styles.subscribeHeader}>
      <p>Made with ❤️ by Amy’s supporters.️</p>

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
        {/* <a
          className={styles.mediaWrapper}
          href='https://www.facebook.com/amyforhcde'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FacebookIcon />
          <span>Facebook</span>
        </a>
        <a className={styles.mediaWrapper} href='https://google.com'>
          <TweeterIcon />
          <span>Tweet</span>
        </a>
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
          <DonateIcon />
          <span>Donate</span>
        </a> */}
      </div>
    </div>

    <div className={styles.logoWrapper}>
      <img src='images/logo.png' alt='amy hinojosa logo' />
    </div>

    <div className={styles.subscribeContent}>
      <p className={styles.messageWrapper}>
        Support Amy Flores Hinojosa for your Harris County Department of
        Education Chair
      </p>
    </div>

    <div className={styles.joinWrapper}>
      <p>Join the subscription list today</p>
      <div>
        <input
          type='text'
          className={styles.input}
          placeholder='Type your email here!'
        />
        <button className={styles.button}>Join List</button>
      </div>
    </div>

    <div className={styles.subscribeFooter}>
      <p>Made with ❤️ by Amy’s supporters.️</p>
    </div>
  </main>
)

export default SubscribeTemplate
