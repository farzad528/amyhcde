import Link from "next/link";
import Button from "../atoms/Button";
import styles from "./AboutFullTemplate.module.css";
import FooterTemplate from "./FooterTemplate";
import BackIcon from "../icons/BackIcon";

const AboutFullTemplate = () => {
  return (
    <main className={styles.aboutFullTemplateContainer}>
      <div className={styles.aboutFullHeader}>
        <div className={styles.navLinkContainer}>
          <Link className={styles.navLink} href="/#about-id">
            About
          </Link>
          <Link className={styles.navLink} href="/#values-id">
            Values
          </Link>
          <Link className={styles.navLink} href="/#accomplishments-id">
            Accomplishments
          </Link>
          <Link className={styles.navLink} href="/#stake-id">
            What’s at Stake?
          </Link>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <Link href="/">
          <a>
            {" "}
            <BackIcon />
          </a>
        </Link>
        <h3>About</h3>
        <p>
          Amy Hinojosa was born and raised in Pasadena TX, where she currently
          resides with her husband and their two teenage boys. She has a
          Bachelor of Science in Chemical Engineering from The University of
          Houston, and is passionate about elevating students, families and
          generations through education.
          <br />
          <br />
          Amy has shown passion for education throughout her career, founding a
          professional mentor program at her previous engineering firm and a
          high school mentor program at Northside High School with Project GRAD.
          After finding inspiration volunteering at her local little league, Amy
          founded Community Leaders Encouraging Academia Through Sports, CLEATS
          Inc., to facilitate local university visits for children in Pasadena’s
          athletic programs. She is a Houston Leadership ISD 2020 fellow and a
          Houston Latinos for Education 2019 fellow. Amy serves as a director on
          the board of ProUnitas, a non-profit organization dedicated to raising
          awareness of and providing access to health and wellness resources
          needed by students in the community. In December 2019, Amy was
          appointed to Position 1 on the Harris County Department of Education
          Board of Trustees. During her tenure, she voted to raise department
          wages to a minimum of 15 dollars, provide Harris County school
          districts with pandemic supplies, allocate $300,000 for teacher
          supplies, approve a new equine therapy program, expand early
          childhood/after-school programs, and approve new facilities
          specifically designed for the unique needs of the students at HCDE
          schools. Recently, Amy was accepted to the Chamber of Commerce IMPACT
          Pasadena, 2022 fellowship program for future leaders.
          <br />
          <br />
          In her spare time Amy enjoys hanging out with her pet cat and two
          dogs, bodybuilding, cooking with her husband, learning to play the
          guitar and watching her two sons play high school baseball.
        </p>
      </div>
      <FooterTemplate />
    </main>
  );
};

export default AboutFullTemplate;
