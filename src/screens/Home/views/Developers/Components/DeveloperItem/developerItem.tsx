import { useNavigate } from "react-router-dom";
import styles from "./developerItem.module.css";
import { APP_ROUTES } from "../../../../../../routes/app-router";
type propsType = {
  item?: {};
};

const DeveloperItem = (props: propsType) => {
  const navigate: any = useNavigate();
  return (
    <div
      className={styles.container}
      onClick={() =>
        navigate(APP_ROUTES.BUILDER, { state: { id: 7, color: "green" } })
      }
    >
      <a className={styles.link}>
        <div className={styles.image_box}>
          <div className={styles.developers_img_wrapper}>
            <div
              className={styles.developers_img_content}
              style={{
                backgroundImage: `url("https://cdn.netsolve.ru/Builders/3-red/logo/KASRqWBfOvZn.svg")`,
              }}
            ></div>
          </div>
        </div>
        <div className={styles.developers_info}>
          <div className={styles.developers_name}>
            <h2>3-RED</h2>
          </div>
          <div className={styles.developers_features}>
            <div className={styles.features_item}>
              <div className={styles.developers_features}>
                <span className={styles.features_counter}>0</span>
                <span className={styles.features_item}>Строятся</span>
              </div>
              <div className={styles.developers_features}>
                <span className={styles.features_counter}>1</span>
                <span className={styles.features_item}>Построено</span>
              </div>
            </div>
            <div className={styles.developers__text}>
              <p> Группа компаний 3RED ведет свою деятельность с 2012...</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
export default DeveloperItem;
