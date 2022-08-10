import Image from 'next/image'
import React from 'react'
import styles from './TestimonialsTemplate.module.css'
import derek from '../../assets/derek.png'
import emily from '../../assets/emily.png'
import joao from '../../assets/joao.png'

const TestimonialsTemplate = () => (
  <section className={styles.testimonialsTemplate}>
    <h3>Testimonials</h3>
  
    <div className={styles.testimonialsWrapper}>
      <div className={styles.testimonialCard}>
        <Image height={150} width={150} src={derek}/>
        <p className={styles.name}>DEREK</p>
        <p className={styles.role}>TEACHER</p>
        <p className={styles.testimonial}>“Amy is a wonderful human being and get’s shit done!”</p>
      </div>

      <div className={styles.testimonialCard}>
        <Image height={150} width={150} src={emily}/>
        <p className={styles.name}>EMILY</p>
        <p className={styles.role}>STUDENT</p>
        <p className={styles.testimonial}>“I believe in Amy to support our district”</p>
      </div>

      <div className={styles.testimonialCard}>
        <Image height={150} width={150} src={joao}/>
        <p className={styles.name}>DEREK</p>
        <p className={styles.role}>MAYOR</p>
        <p className={styles.testimonial}>“Amy has great leadership skills!”</p>
      </div>
    </div>
  </section>
)

export default TestimonialsTemplate
