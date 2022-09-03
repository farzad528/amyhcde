import React from 'react'
import styles from './FooterTemplate.module.css'
import FacebookIcon from '../icons/FacebookIcon'
import EmailIcon from '../icons/EmailIcon'
import GiftIcon from '../icons/GiftIcon'

const FooterTemplate = () => (
  <footer className={styles.footerTemplate}>
    <div className={styles.subscribeFooter}>
      <p>Made with ❤️ by Amy’s supporters.️</p>
    </div>
  </footer>
)

export default FooterTemplate
