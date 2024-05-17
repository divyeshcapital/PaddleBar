import { _classes } from "../utilities/helpers";
import styles from "../styles/modules/ReserveBadge.module.scss";
import Link from "next/link";
const cl = _classes(styles);

function ReserveBadge() {
  return (
    <div className={cl("reserve__badge")}>
      <Link href={"https://google.com"}>
        <svg
          id="tealBadge"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#0699a9"
          viewBox="0 0 144 137.66"
        >
          <path
            class="cls-1"
            d="M316.39,510c0,7.23-10.9,12.65-13,19.17-2.2,6.76,3.36,17.53-.73,23.16s-16.13,3.7-21.81,7.84-7.43,16.13-14.19,18.33c-6.52,2.11-15-6.5-22.25-6.5s-15.74,8.61-22.26,6.5c-6.76-2.2-8.56-14.24-14.19-18.33s-17.67-2.16-21.81-7.84,1.47-16.4-.73-23.16c-2.11-6.52-13-11.94-13-19.17s10.9-12.64,13-19.16c2.2-6.76-3.36-17.54.73-23.16s16.13-3.71,21.81-7.84,7.43-16.14,14.19-18.33c6.52-2.12,15,6.49,22.26,6.49s15.73-8.61,22.25-6.49c6.76,2.2,8.56,14.23,14.19,18.33s17.67,2.16,21.81,7.84-1.47,16.4.73,23.16C305.49,497.39,316.39,502.81,316.39,510Z"
            transform="translate(-172.39 -441.21)"
          />
        </svg>
        <span>{"Reserve a Ping Pong Table"}</span>
      </Link>
    </div>
  );
}

export default ReserveBadge;
