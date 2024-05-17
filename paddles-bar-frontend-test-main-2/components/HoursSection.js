import { _classes } from "../utilities/helpers";
import styles from "../styles/modules/Hours.module.scss";
import Image from "next/image";

const cl = _classes(styles);

const svg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.44 125.84">
    <path
      d="M1.09.1s-1.32 6.38 0 11 5.94 40.51 79.48 113.17c0 0-5.06-22.46-1.54-55.71 0 0-45.8 40.74-46.24 49.55 0 0 13-.88 20.92-5.29s19.82-5.72 19.82-5.72"
      fill="none"
      stroke="#f5a623"
      strokeWidth="2"
    />
  </svg>
);

export default function HoursSection() {
  const arrayOfObjects = [
    { dayofWeek: "Monday & Tuesday", hours: "Closed" },
    { dayofWeek: "Wednesday", hours: "11am - 12am" },
    { dayofWeek: "Thursday", hours: "11am-12am" },
    { dayofWeek: "Friday & Saturday", hours: "11am - 2am" },
    { dayofWeek: "Sunday", hours: "11am-9pm" },
  ];
  return (
    <section className={cl("hours")}>
      <div className={cl("container")}>
        <div className={cl("arrow")}>{svg}</div>
        <div className={cl("circle")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 391.31 176.45">
            <path
              d="M271 .78s-89-3-185 49-159 140 84 124 284-126 129-153-199-8-199-8"
              fill="none"
              stroke="#f5a623"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className={cl("row")}>
          <div className={cl("title__container")}>
            <h2 className={cl("main__title")}>Come Paddle With Us</h2>
          </div>

          <div className={cl("hours__container")}>
            <ul className={cl("hours__list")}>
              {arrayOfObjects.map((hour, i) => {
                return (
                  <li className={cl("text")} key={i}>
                    <span className={cl("hour-title")}>{hour.dayOfWeek}</span> /{" "}
                    <span className={cl("hour-time")}>{hour.hours}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
