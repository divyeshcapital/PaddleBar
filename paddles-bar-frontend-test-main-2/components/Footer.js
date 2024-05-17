import React from "react";
import { _classes } from "../utilities/helpers";
import styles from "../styles/modules/Footer.module.scss";
import Link from "next/link";

const cl = _classes(styles);

export default function Footer(props) {
  const arrayOfStrings = ["Contact", "Careers", "Privacy Policy"];

  const renderContact = () => (
    <div className={cl("contact")}>
      <h2>Contact</h2>
      <ul>
        <li>
          Contact Us:{" "}
          <span>
            <Link href={"https://www.google.com/"}>info@paddles.com</Link>
          </span>
        </li>
        <li>
          Address:{" "}
          <span>
            <Link href={"https://www.google.com/"}>
              123 Paddles Lane, Narnia 01010
            </Link>
          </span>
        </li>
        <li>
          Call Us:{" "}
          <span>
            <Link href={"https://www.google.com/"}>(914) 233-0345</Link>
          </span>
        </li>
      </ul>
    </div>
  );
  const renderSocial = () => (
    <div className={cl("social")}>
      <h2>Social</h2>
      <p>
        <Link href="https://www.google.com/">
          Follow Paddles today for the latest update
        </Link>
      </p>
    </div>
  );
  const renderNav = () => (
    <nav>
      <ul>
        <li>&copy; 2021 SmashATX</li>
        {arrayOfStrings.map((item, index) => {
          return (
            <li key={index}>
              <Link href="https://www.google.com/">{item}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
  return (
    <footer className={cl("footer")}>
      <section className={cl("topFooter")}>
        {renderContact()}
        {renderSocial()}
      </section>
      <section className={cl("bottomFooter")}>{renderNav()}</section>
    </footer>
  );
}
