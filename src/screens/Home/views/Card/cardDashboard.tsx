import { observer } from "mobx-react";
import useRootStore from "../../../../Hooks/useRootStore";
import FilterModal from "../../../../components/FilterModal/filterModal";
import Footer from "../../../../components/Footer/footer";
import YandexMap from "../../../../components/YandexMap/yandexMap";
import styles from "./card.module.css";
const CardDashboard = () => {
  const { toggle } = useRootStore().visibleStore;
  const data = [
    { id: 0, locatsiya1: 41.307731, locatsiya2: 69.251159 },
    { id: 1, locatsiya1: 41.318025, locatsiya2: 69.279018 },
    { id: 2, locatsiya1: 41.314354, locatsiya2: 69.26548 },
    { id: 3, locatsiya1: 41.309733, locatsiya2: 69.254216 },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.filterBox}>
        <button
          onClick={() => toggle("filterModal")}
          className={styles.filterBtn}
        >
          Фильтры
        </button>
        <button className={styles.listBtn}>Показать списком</button>
      </div>
      <div className={styles.map}>
        <YandexMap data={data} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
export default observer(CardDashboard);
