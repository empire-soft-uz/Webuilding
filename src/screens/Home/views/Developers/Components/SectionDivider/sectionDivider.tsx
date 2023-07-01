import CountBtn from "../../../../../../components/CountBtn/countBtn";
import styles from "./sectionDivider.module.css";
const SectionDivider = () => {
  return (
    <div className={styles.page_navsection}>
      <div className={styles.pagination}>
        <div className={styles.pagination__button} aria-disabled="true">
          <CountBtn countBtnType="outline" title="Предыдущая" />
        </div>

        <div className={styles.pages}>
          <CountBtn countBtnType="outline" title="1" />
          <CountBtn countBtnType="outline" title="1" />
          <CountBtn countBtnType="outline" title="1" />
          <CountBtn countBtnType="outline" title="1" />
          <CountBtn countBtnType="outline" title="1" />
          <CountBtn countBtnType="outline" title="1" />
          <CountBtn countBtnType="outline" title="1" />
        </div>

        <div className={styles.pagination_button_next}>
          <CountBtn countBtnType="outline" title="Следующая" />
        </div>
      </div>
    </div>
  );
};
export default SectionDivider;
