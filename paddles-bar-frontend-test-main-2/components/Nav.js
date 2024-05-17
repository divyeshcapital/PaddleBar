import React from "react";
import { _classes } from "../utilities/helpers";
import styles from "../styles/modules/Nav.module.scss";
import ReserveBadge from "./ReserveBadge";
const cl = _classes(styles);
import Link from "next/link";

export default function Nav(props) {
  return (
    <nav className={cl("_")}>
      <ul className={cl("items")}>
        <li className={cl("item")}>
          <Link href="/" className={cl("link")}>
            Home
          </Link>
        </li>
        <li className={cl("item")}>
          <Link href="about" className={cl("link")}>
            About
          </Link>
        </li>
        <li className={cl("item")}>
          <ReserveBadge />
        </li>
      </ul>
    </nav>
  );
}
