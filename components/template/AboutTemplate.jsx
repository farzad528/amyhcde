import Image from "next/image";
import React from "react";
import styles from "./AboutTemplate.module.css";
import AmyAbout from "../../assets/amyAbout.png";
import AmyValues from "../../assets/amyValues.png";
import AmyAccomp from "../../assets/amyAccomp.png";
import AmySupport from "../../assets/amySupport.png";
import about from "../../assets/about.svg";
import accomplishments from "../../assets/accomplishments.svg";
import stake from "../../assets/stake.svg";
import values from "../../assets/values.svg";
import Link from "next/link";

const AboutTemplate = () => {
  return (
    <section className={styles.aboutTemplateContainer}>
      <div className={styles.sectionTrack} id="about-id">
        <div className={styles.nextImgWrapper}>
          <Image
            src={about}
            height={300}
            alt="picture of about Amy"
            className={styles.nextImage}
          />
        </div>
        <div className={styles.sectionCard}>
          <p className={styles.sectionCardHeader}>ABOUT</p>
          <h2>Born and Raised in Pasadena..</h2>
          <p>
            She has a Bachelor of Science in Chemical Engineering from The
            University of Houston, and is passionate about elevating students,
            families and generations through education.
          </p>
          <div className={styles.sectionReadMoreButton}>
            <Link href="/about">Read more</Link>
          </div>
        </div>
      </div>

      <div className={styles.sectionTrack} id="values-id">
        <div className={styles.sectionCard}>
          <p className={styles.sectionCardHeader}>VALUES</p>
          <h2>Be who you needed, when you were young</h2>
          <p>
            "Academia is not the path for every student, but every student
            should know the path to academia." <br />- Trustee Hinojosa
          </p>
          <div className={styles.sectionReadMoreButton}>
            <Link href="/values">Read more</Link>
          </div>
        </div>
        <div className={styles.nextImgWrapper}>
          <Image
            src={values}
            height={300}
            alt="picture of amy's values"
            className={styles.nextImage}
          />
        </div>
      </div>

      <div className={styles.sectionTrack} id="accomplishments-id">
        <div className={styles.nextImgWrapper}>
          <Image
            src={accomplishments}
            height={300}
            alt="picture of Amy's accomplishments"
            className={styles.nextImage}
          />
        </div>

        <div className={styles.sectionCard}>
          <p className={styles.sectionCardHeader}>ACCOMPLISHMENTS</p>
          <h2>Current Initiatives </h2>
          <p>
            Expanding early childhood programs Incorporating financial literacy
            classes for our Adult Education students Working with Commissioner
            Garcia’s Office to expand the “2 College & Beyond FREE SAT
            Preparation Course” to the students in our HCDE special schools
          </p>
          <div className={styles.sectionReadMoreButton}>
            <Link href="/accomplishments">Read more</Link>
          </div>
        </div>
      </div>

      <div className={styles.sectionTrack} id="stake-id">
        <div className={styles.sectionCard}>
          <p className={styles.sectionCardHeader}>WHAT’S AT STAKE?</p>
          <h2>The department serves on average, 150,000 students every year</h2>
          <p>
            As your Precinct 2 Trustee, I will continue to support the mission
            and vision of HCDE because I believe in the work we are doing and
            the difference it makes in the lives of Harris County citizens.
          </p>
          <div className={styles.sectionReadMoreButton}>
            <Link href="/stake">Read more</Link>
          </div>
        </div>
        <div className={styles.nextImgWrapper}>
          <Image
            src={stake}
            height={300}
            alt="picture of about Amy"
            className={styles.nextImage}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTemplate;
