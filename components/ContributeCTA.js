import styles from "../styles/ContributeCTA.module.scss";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ContributeCTA = () => {
  const displayNone = { display: "none" };
  return (
    <aside className={styles.openSource}>
      <div className={styles.openSourceWrapper}>
        <h2 className="heading">Open Source</h2>
        <div className={styles.openSource__body}>
          <p>
            This project is OpenSource and is hosted on{" "}
            <a
              className="paragraphLinks"
              target="_blank"
              href="https://github.com/Timonwa/techroadmap"
              rel="noreferrer">
              GitHub
            </a>
            . Please give us a <FaStar className={styles.star} />
            . All meaningful contributions are welcome to help grow this project
            and you don&apos;t need to know how to code to contribute.
          </p>
          <p>
            If you would like to contribute to this project, please visit our
            <Link href="/contribute">
              <a className="paragraphLinks"> contributors page</a>
            </Link>{" "}
            to find out how to contribute.
          </p>
          <p style={displayNone}>
            A considerable amount of my time is spent doing unpaid community
            work on things that I hope will help humanity in some way. Your
            sponsorship helps me continue to produce more openSource and free
            educational material consumed by hundreds of thousands of developers
            every month.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default ContributeCTA;
