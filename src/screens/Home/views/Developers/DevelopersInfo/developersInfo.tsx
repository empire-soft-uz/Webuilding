import Footer from "../../../../../components/Footer/footer";
import ProductItem from "../../../../../components/ProductItem/productItem";
import { COLORS } from "../../../../../constants/color";
import { ProductData } from "../../../../../constants/productData";
import { APP_ROUTES } from "../../../../../routes/app-router";
import styles from "./developersInfo.module.css";
import { useLocation, useNavigate } from "react-router-dom";
const DevelopersInfo = () => {
  const navigation = useNavigate();

  const ProductListOfMain = () => {
    return (
      <div className={styles.productBox}>
        {ProductData.map((e, index) => {
          return (
            <ProductItem
              key={index}
              symbolDotColor={COLORS.orange}
              image={e.images[0].image}
              company={e.company}
              name={e.name}
              homeCount={e.homeCount}
              near={e.near}
              nearTime={e.nearTime}
              price={e.price}
              time={e.process}
              symbolDotIcon={e.symbolDotIcon}
              minexpense={e.minExpense}
              studios={e.studios}
              oneRoom={e.oneRoom}
              twoRooms={e.twoRooms}
              threeRooms={e.threeRooms}
              fourRooms={e.fourRooms}
              fiveRooms={e.fiveRooms}
              onPress={() => navigation(APP_ROUTES.PRODUCT)}
            />
          );
        })}
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.image_box}>
          <div className={styles.developer__img}>
            <img src="https://cdn.netsolve.ru/Builders/3-red/logo/KASRqWBfOvZn.svg" />
          </div>
        </div>

        <div className={styles.developer__info}>
          <h1>Строительная компания 3-RED</h1>
          <div className={styles.developer__features}>
            <div className={styles.developer__features_item}>
              <span>1</span>
              <p> Построено</p>
            </div>
            <div className={styles.developer__features_item}>
              <span>0</span>
              <p> Строится</p>
            </div>
            <div className={styles.developer__features_item}>
              <span>2012</span>
              <p> Год основания</p>
            </div>
          </div>
          <div className={styles.developer__text}>
            <p>
              Группа компаний 3-RED ведет свою деятельность с 2012 г. В портфеле
              холдинга — объекты коммерческой и жилой застройки на разных
              стадиях реализации.
            </p>
            <h3>Ключевые направления деятельности</h3>
            <p>
              ГК 3-RED осуществляет контроль над полным циклом работ, связанных
              с возведением объекта. В зону ответственности корпорации входит
              создание архитектурной концепции проекта, подбор площадки,
              организация строительства сооружений и их ввод в эксплуатацию.
            </p>
            <p>
              Дополнительно холдинг участвует в формировании благоприятной
              социальной среды для проживания, включая обустройство придомовой
              территории и развитие инфраструктурной сети.
            </p>
            <h3>Реализованные проекты</h3>
            <p>
              Компания специализируется на возведении комплексов класса бизнес,
              комфорт и стандарт. Среди проектов:
            </p>
            <ol>
              <li>
                жилой комплекс <strong>«Видный берег»</strong> в Люберцах;
              </li>
              <li>
                ЖК <strong>«Резиденция Май»</strong> — уникальный проект
                малоэтажной застройки в деревне Горки;
              </li>
              <li>
                <strong>«Облака»</strong> — жилой комплекс в Люберцах,
                реализованный с соблюдением всех требований концепции «Умный
                квартал».
              </li>
            </ol>
            <p>
              Некоторые проекты конгломерата (ЖК <strong>«Новокрасково»</strong>
              и ЖК <strong>«Резиденция Май»</strong>) получили профессиональное
              признание в виде присуждения премии{" "}
              <strong>PROESTATE&amp;TOBY Awards</strong> в 2019 и 2020 гг.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.section__header}>
          <h2 className={styles.section__header_title}>Новостройки от Coldy</h2>
          <div className={styles.section__header_nav}>
            <div className={styles.section__header_buttons}>
              {/* <div className={styles.section_nav}>
                <button
                  type="button"
                  className="slider-button slider-button--prev homecomplex-prev swiper-button-disabled swiper-button-lock"
                  disabled={false}
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-e84ab5b1096b816be"
                  aria-disabled="true"
                >
                  <i>
                    <svg
                      className="ico-svg"
                      viewBox="0 0 192 512"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                  </i>
                </button>
                <button
                  type="button"
                  className="slider-button slider-button--next homecomplex-next swiper-button-lock swiper-button-disabled"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-e84ab5b1096b816be"
                  aria-disabled="true"
                >
                  <i>
                    <svg
                      className="ico-svg"
                      viewBox="0 0 192 512"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                  </i>
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <ProductListOfMain />
      </div>
      <Footer />
    </div>
  );
};
export default DevelopersInfo;
