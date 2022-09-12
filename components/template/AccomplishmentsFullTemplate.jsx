import Link from "next/link";
import Button from "../atoms/Button";
import styles from "./AboutFullTemplate.module.css";
import FooterTemplate from "./FooterTemplate";
import BackIcon from "../icons/BackIcon";

const AccomplishmentsFullTemplate = () => {
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
        <h3>Accomplishments</h3>
        <p>
          I was appointed to the Harris County Department of Education (HCDE) in
          December 2019. I am passionate about public education, particularly
          when it comes to providing support for underprivileged families to
          thrive. I am proud to serve on the Harris County Department of
          Education Board of Trustees because my values align with the
          Department&apos;s mission to serve and maximize student potential,
          respond to the evolving needs of the community and perform in an
          ethical, transparent and fiscally responsible manner.
          <br />
          <br />
          My appointment to the board was significant and timely, because before
          that time the majority of Board members sought to dismantle the
          Department. I was appointed, along with Trustee Andrea Duhon, and when
          we took our seats, the majority of the Board flipped in support of the
          Department. The following November, the remaining two incumbents from
          the prior, unsupportive majority were unseated to complete the Board
          transformation. We are now a Board, 100% aligned to support and enable
          the Department to provide high-quality, cost-effective educational
          services to school districts, educators, and students in Harris
          County.
          <br />
          <br /> Since my appointment, the Board has voted to build two new
          schools for special needs students, remodel the aging administration
          building, increase minimum wages for Department employees to fifteen
          dollars, and build a premiere equine facility for therapy services. We
          also revived the Education Foundation of Harris County, which remained
          unfunded under the previous board. After the pandemic began, the new
          majority voted to release half a million dollars through the Education
          Foundation to support Harris County school districts. This allowed
          Harris County schools to apply for grants and funding through the
          Education Foundation of Harris County to pay for pandemic-related
          supplies and other resources needed for education purposes.
          Furthermore, we leveraged the Foundation to allocate 300,000 dollars
          toward school supplies by providing Harris County teachers with
          hundred-dollar vouchers to an online catalog to purchase supplies for
          their classrooms. This program, called Tools for Teachers, sold out in
          under 24 hours.
        </p>
      </div>
      <FooterTemplate />
    </main>
  );
};

export default AccomplishmentsFullTemplate;
