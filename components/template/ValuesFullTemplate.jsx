import Link from "next/link";
import Button from "../atoms/Button";
import styles from "./AboutFullTemplate.module.css";
import FooterTemplate from "./FooterTemplate";
import BackIcon from "../icons/BackIcon";

const ValuesFullTemplate = () => {
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
            {` `}
            <BackIcon />
          </a>
        </Link>
        <h3>Values</h3>
        <p>
          I believe leadership is about using your talents to lift others up and
          leaving things better than you found them. I spent my twenties taking
          care of my family, supporting our household while my husband went back
          to school to get his PharmD. I have spent the last decade working to
          give back to my city of Pasadena and the people of Harris County. I
          have been successful in my life and in my career, but I recognize I
          didn’t do that in a vacuum. Countless people contributed to my
          success, and many are still working to elevate me today. Everyone can
          reflect upon their life and recall a moment in time, where someone did
          something for them and it completely changed the course of their lives
          for the better. Have you ever heard someone say the following quote?
          <br />
          <br />
          <blockquote>
            <i>“Be who you needed, when you were young”</i>
          </blockquote>
          <br />
          <br />
          I believe in that mind-set and believe that it is the essence of
          leadership.
          <br />
          <br />I believe in the power of education to change lives and elevate
          generations. My grandparents were migrant workers, traveling every
          summer to work in the fields. I am incredibly proud of them, and my
          parents who worked very hard to make me the person I am today. The
          best way I know to honor them and their sacrifices is to help other
          students and families elevate themselves through education.
          <br />
          <br />
          In 2018 I founded Community Leaders Encouraging Academia Through
          Sports, CLEATS Inc. It is a non-profit organization designed to get
          kids on campus, targeting students 10-13 years old to familiarize them
          with the opportunities in the Houston area. It is important for all
          students to experience the wonder and beauty of our local college and
          university campuses, to make space for them to dream. Academia is not
          the path for every student, but every student should know the path to
          academia. It must be an option within reach of every student, should
          they choose to pursue it. CLEATS mission is to foster a sense of
          ownership and familiarity by collaborating with local city sports
          programs to include at least one CLEATS-on-Campus trip to a college or
          university basketball, baseball or soccer game per season.
          <br />
          <br />
          Every day, I strive to be the person I needed when I was young. My
          journey began with CLEATS. My passion for creating opportunities for
          the children in our community to thrive, brought me to the Harris
          County Department of Education.
        </p>
      </div>
      <FooterTemplate />
    </main>
  );
};

export default ValuesFullTemplate;
