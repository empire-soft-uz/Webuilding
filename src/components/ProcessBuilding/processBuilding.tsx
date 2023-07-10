import React from "react";
import { COLORS } from "../../constants/color";
import { ASSETS } from "../../constants/requireAssets";
import DropdownMenu from "../DropdownMenu/dropdownMenu";
import Text from "../Text/text";
import styles from "./processBuilding.module.css";

const data = [
  {
    id: 1,
    img: ASSETS.pr1,
  },
  {
    id: 2,
    img: ASSETS.pr2,
  },
  {
    id: 3,
    img: ASSETS.pr1,
  },
  {
    id: 4,
    img: ASSETS.pr1,
  },
  {
    id: 5,
    img: ASSETS.pr1,
  },
  {
    id: 6,
    img: ASSETS.pr1,
  },
];

const ProcessBuilding = () => {
  const [active, setActive] = React.useState(1);

  const handleActive = (id: number) => {
    setActive(id);
  };

  return (
    <div className={styles.contianer}>
      <div className={styles.box_container}>
        <div className={styles.leftBox}>
          <div className={styles.header1}>
            <Text
              textType={"middle"}
              textSize={"sixteen"}
              textColor={"black"}
              cursor={"Cursor"}
              text="Qurilish jarayoni"
            />
            <DropdownMenu
              option="oktabr 2022"
              textSize="16px"
              textColor={COLORS.grey}
            />
          </div>
          <div className={styles.caruselBox}>
            <div className={styles.mainImage}>
              <img
                className={styles.mainImg}
                src={data[active - 1].img}
                alt=""
              />
            </div>
            <div className={styles.choseImage}>
              {data.map((item, index) => (
                <button
                  key={index}
                  className={`${styles.item} ${
                    active === item.id ? styles.activeItem : ""
                  }`}
                  onClick={() => handleActive(item.id)}
                >
                  <img
                    className={`${styles.img} ${
                      active === item.id ? styles.activeImg : ""
                    }`}
                    src={item.img}
                    alt=""
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        <span className={styles.line}></span>
        <div className={styles.rightBox}>
          <div className={styles.header2}>
            <Text
              textType={"middle"}
              textSize={"sixteen"}
              textColor={"black"}
              cursor={"Cursor"}
              text="Ishlab chiquvchidan video taqdimot"
            />
          </div>
          <div className={styles.videoBox}>
            <img className={styles.mainVideo} src={ASSETS.pr3} alt="" />
            <div className={styles.above}>
              <div className={styles.playBox}>
                <img className={styles.play} src={ASSETS.play} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessBuilding;
