import Link from "next/link";
import Button from "../atoms/Button";
import styles from "./AboutFullTemplate.module.css";
import FooterTemplate from "./FooterTemplate";
import BackIcon from "../icons/BackIcon";

const StakeFullTemplate = () => {
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
            <BackIcon />
          </a>
        </Link>
        <h3>What&apos;s at Stake?</h3>
        <p>
          The Department serves on average 150,000 students and educators,
          including providing critical services such as out-of-school-time
          activities, school-based therapy services, Early Head Start and Head
          Start Centers, Adult Education, and the like. Further, HCDE runs four
          schools dedicated to educating, supporting and encouraging our youth
          who are adjudicated or expelled, in substance abuse recovery and those
          with intellectual and behavioral disabilities. All of these services
          are provided leveraging the Harris County tax dollar, costing each
          household an average of 9 dollars per year and saving partners and
          school districts millions of dollars through shared services. Further,
          the Department has accomplished all of this while also lowering the
          tax rate each year since 2015.
          <br />
          <br />
          HCDE is unique from independent school boards in that it can be
          eliminated via a bill in the State legislature. It is imperative to
          maintain a board of trustees who believes in the mission to continue
          serving the citizens of Harris County by equalizing educational
          opportunities in the County. In the past, sitting board members have
          advocated to close the Department.
          <br />
          <br />I am proud of the Harris County Department of Education. As your
          Precinct 2 Trustee, I will continue to support the mission and vision
          of HCDE because I believe in the work we are doing and the difference
          it makes in the lives of Harris County citizens.
        </p>
      </div>
      <FooterTemplate />
    </main>
  );
};

export default StakeFullTemplate;
