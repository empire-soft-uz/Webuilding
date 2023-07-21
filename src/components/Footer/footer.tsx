import { useState } from "react";
import styles from "./footer.module.css";
import { useTranslation } from "react-i18next";
const data = [
  {
    id: 0,
    href: "",
    title: "ЖК «Wave»",
  },
  {
    id: 1,
    href: "",
    title: "ЖК «Nametkin Tower»",
  },
  {
    id: 2,
    href: "",
    title: "ЖК «Nametkin Tower»",
  },
  {
    id: 3,
    href: "",
    title: "ЖК «Бизнес-центр Stone Ленинский»",
  },
  {
    id: 4,
    href: "",
    title: "ЖК «Level Южнопортовая»",
  },
  {
    id: 5,
    href: "",
    title: "ЖК «Symphony 34»",
  },
  {
    id: 6,
    href: "",
    title: "ЖК «Voxhall»",
  },
  {
    id: 7,
    href: "",
    title: "ЖК «Sky Garden»",
  },
  {
    id: 8,
    href: "",
    title: "ЖК «Клубный дом «Чистые Пруды»»",
  },
  {
    id: 9,
    href: "",
    title: "ЖК «Rotterdam»",
  },
  {
    id: 10,
    href: "",
    title: "ЖК «High Life»",
  },
  {
    id: 11,
    href: "",
    title: "ЖК «MOD»",
  },
  {
    id: 12,
    href: "",
    title: "ЖК «Верейская 41»",
  },
  {
    id: 13,
    href: "",
    title: "ЖК «Ильинойс»",
  },
];
const Footer = () => {
  const handleChange = (event: { target: { value: any } }) => {
    console.log("onChange==", event.target.value);
  };
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_top}>
          <div className={styles.footer_main}>
            <div className={styles.footer_main_block}>
              <ul className={styles.footer__contacts}>
                <li>
                  <div className={styles.footer__worktime}>{t("workTime")}</div>
                </li>
                <li>
                  <a href="tel:+74953747347" className={styles.footer__phone}>
                    +7 (495) 374-73-47
                  </a>
                </li>
                <li>
                  <a
                    href="#callback"
                    className={styles.footer__callback}
                    data-dest="modal"
                  >
                    {t("callYouBack")}
                  </a>
                </li>
              </ul>
              <ul className={styles.footer__social_social}>
                <li className={styles.social__item}>
                  <a href="" target="_blank" className={styles.social__link}>
                    <i className={styles.social__link_color}>
                      <img
                        src="https://strizhi.estate/storage/img/social/vk__color.svg"
                        className={styles.img_fluid}
                        alt=""
                      />
                    </i>
                    {/* <i className={styles.social__link_gray}>
                      <img
                        src="https://strizhi.estate/storage/img/social/vk__gray.svg"
                        className={styles.img_fluid}
                        alt=""
                      />
                    </i> */}
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footer_main_block}>
              <div className={styles.footer__office}>
                <div className={styles.footer__office_title}>ООО «СТРИЖИ»</div>
                <div className={styles.footer__office_address}>
                  125284, г. Москва, Ленинградский пр., д. 31А, стр. 1,
                  этаж/помещ. 3/II, ком. 106М, 106Н, 106О
                </div>
              </div>
              <div className={styles.footer__data}>
                Агентство недвижимости «СТРИЖИ» <br /> ИНН 7714468929 / ОГРН
                1217700066980
              </div>
            </div>
            <div className={styles.footer_main_block}>
              <form
                action="https://strizhi.estate/article"
                className={styles.footer__search}
                method="post"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="mkNNN2oDcIy84SlcUWI1IhgrgmcUEn9F47EVlkSI"
                />
                <input type="hidden" name="_method" value="POST" />
                <div className={`${styles.footer__search} ${styles.label}`}>
                  {t("searchArticle")}
                </div>
                <div className={`${styles.footer__search} ${styles.form}`}>
                  <input
                    type="text"
                    className={`${styles.footer__search} ${styles.input}`}
                    name="article"
                    placeholder="XX-СТР-000000000"
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className={styles.footer_nav}>
            <div className={styles.footer_nav_box}>
              <div className={styles.footer_nav__group}>
                <div className={styles.footer_nav__header}>Новостройки</div>
                <div className={styles.footer_nav__content}>
                  <ul className={styles.footer_nav__menu}>
                    {data.map((item, index) => {
                      return (
                        <li key={index}>
                          <a target="_blank" href={item.href}>
                            {item.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className={styles.footer_nav__group}>
                <div className={styles.footer_nav__header}>Популярное</div>
                <div className={styles.footer_nav__content}>
                  <ul className={styles.footer_nav__menu}>
                    {data.map((item, index) => {
                      return (
                        <li key={index}>
                          <a target="_blank" href={item.href}>
                            {item.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.footer_bottom}>
          <ul className={styles.footer_bottom__links}>
            <li>
              <a href="" className={styles.footer_bottom__link}>
                Политика конфиденциальности
              </a>
            </li>
          </ul>
          <ul className={styles.footer_bottom__info}>
            <li>
              <div className={styles.footer_bottom__copy}>Стрижи — 2023</div>
            </li>
            <li>
              <a href="" target="_blank" className={styles.footer_bottom__dev}>
                <span className={styles.footer_bottom__dev_text}>
                  Сайт разработали в
                </span>
                <i className={styles.footer_bottom__dev_logo}>
                  <img
                    src="https://strizhi.estate/storage/img/logo__develop.svg"
                    className={styles.img_fluid}
                    alt=""
                  />
                </i>
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
};
export default Footer;
