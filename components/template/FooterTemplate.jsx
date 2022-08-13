import React from 'react'
import styles from './FooterTemplate.module.css'
import FacebookIcon from '../icons/FacebookIcon'
import EmailIcon from '../icons/EmailIcon'
import GiftIcon from '../icons/GiftIcon'

const FooterTemplate = () => (
  <footer className={styles.footerTemplate}>
    <div className={styles.subscribeHeader}>
      <a
        className={styles.mediaWrapper}
        href='https://www.facebook.com/amyforhcde'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FacebookIcon />
        <span>Facebook</span>
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
        <GiftIcon />
        <span>Donate</span>
      </a>
    </div>

    <div className={styles.subscribeFooter}>
      <p>Made with ❤️ by Amy’s supporters.️</p>
    </div>
  </footer>
)

export default FooterTemplate
