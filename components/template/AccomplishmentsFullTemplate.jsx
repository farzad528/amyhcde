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
            {` `}
            <BackIcon />
          </a>
        </Link>
        <h3>Accomplishments</h3>
        <p>
          I was appointed as Trustee to the Harris County Department of
          Education (HCDE) in December 2019 and am proud to serve on the board
          because my values align with the departments’ mission to support
          students and the needs of the community in an ethical, transparent and
          fiscally responsible manner.
          <br />
          <br />
          My appointment to the board was significant, because previous to that
          time the majority members sought to dismantle the department. I was
          appointed along with Trustee Andrea Duhon, and when we took our seats,
          the majority of the board flipped in support of the department. The
          following November, the remaining two incumbents from the old majority
          were unseated to complete the board transformation. We are now a
          board, 100% aligned in support of the department and its mission to
          provide high-quality, cost-effective educational services to school
          districts, non-profit organizations, governmental entities, students
          and educators.
          <br />
          <br /> Since my appointment, the board has voted to raise department
          wages to a minimum of 15 dollars, approve a new equine therapy
          program, expand early childhood/after-school programs, and approve new
          facilities specifically designed for the unique needs of the students
          at HCDE schools. We also revived the HCDE Education Foundation which
          remained unfunded under the previous board. After the pandemic began,
          the new majority voted to release half a million dollars through the
          Education Foundation to support Harris County School Districts. This
          allowed the schools to apply to grants through the foundation to pay
          for emergency supplies such as masks and sanitizer. Furthermore, we
          leveraged the foundation to allocate 300,000 dollars to help school
          teachers in Harris County buy school supplies. This program, called
          Tools for Teachers, sold out in under 24 hours.
          <br />
          <br />
          My current initiatives are:
          <ul>
            <li>Expanding early childhood programs</li>
            <li>
              Incorporating financial literacy classes for our Adult Education
              students
            </li>

            <li>
              Working with Commissioner Garcia’s Office to expand the “2 College
              & Beyond FREE SAT Preparation Course” to the students in our HCDE
              special schools
            </li>

            <li>
              Improving visibility of the department in Harris County school
              districts
            </li>

            <li>
              Improving visibility of our alternative teacher certification and
              mentor program in Harris County School Districts
            </li>
            <li>
              Exploring ways to leverage the Community Health Network to benefit
              our community
            </li>
          </ul>
        </p>
      </div>
      <FooterTemplate />
    </main>
  );
};

export default AccomplishmentsFullTemplate;
