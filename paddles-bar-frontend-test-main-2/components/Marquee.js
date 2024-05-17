import styles from "../styles/modules/Marquee.module.scss";
import ReactMarquee from "react-fast-marquee";
import { _classes } from "../utilities/helpers";
const cl = _classes(styles);

const Marquee = () => {
  const marqueeText =
    "We're open! Email events@paddles.com to book your next event.";
  const calcMarqueeLength = (text) => {
    let itemCount = 0;
    let marqueeItems = [];
    if (text.length <= 18) {
      itemCount = 16;
      for (let i = 0; i < itemCount; i++) {
        marqueeItems.push(text);
      }
    } else if (text.length <= 30 && text.length > 42) {
      itemCount = 14;
      for (let i = 0; i < itemCount; i++) {
        marqueeItems.push(text);
      }
    } else {
      itemCount = 10;
      for (let i = 0; i < itemCount; i++) {
        marqueeItems.push(text);
      }
    }
    return marqueeItems;
  };

  return (
    <ReactMarquee
      className={cl("marquee")}
      gradient={false}
      pauseOnHover={true}
    >
      {calcMarqueeLength(marqueeText).map((item, index) => {
        return (
          <div key={index} className={cl("marquee_item")}>
            <span>{item}</span>{" "}
          </div>
        );
      })}
    </ReactMarquee>
  );
};

export default Marquee;
