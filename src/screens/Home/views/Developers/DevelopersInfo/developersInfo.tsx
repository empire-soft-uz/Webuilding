import styles from "./developersInfo.module.css";
import { useLocation } from "react-router-dom";
const DevelopersInfo = () => {
  const { state } = useLocation();

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
    </div>
  );
};
export default DevelopersInfo;
