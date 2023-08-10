import { observer } from "mobx-react";
import useRootStore from "../../../../Hooks/useRootStore";
import Footer from "../../../../components/Footer/footer";
import YandexMap from "../../../../components/YandexMap/yandexMap";
import styles from "./card.module.css";
import { useAppModals } from "../../../../components/Modals";
import FooterCard from "../../../../components/FooterCard/FooterCard";
import Dashboard from "../../../../components/Dashboard/dashboard";

const CardDashboard = () => {
    const data = [
        { id: 0, locatsiya1: 41.307731, locatsiya2: 69.251159 },
        { id: 1, locatsiya1: 41.318025, locatsiya2: 69.279018 },
        { id: 2, locatsiya1: 41.314354, locatsiya2: 69.26548 },
        { id: 3, locatsiya1: 41.309733, locatsiya2: 69.254216 },
    ];
    const appModals = useAppModals();

    return (
        <>
            <Dashboard onScroll />
            <div className={styles.container}>
                <div className={styles.filterBox}>
                    <button
                        onClick={() => appModals?.show("cartfilter")}
                        className={styles.filterBtn}
                    >
                        Фильтры
                    </button>
                    <button className={styles.listBtn}>Показать списком</button>
                </div>
                <div className={styles.map} id="map">
                    <YandexMap />
                </div>
            </div>
            <div className={styles.footer}>
                <FooterCard />
            </div>
        </>
    );
};
export default observer(CardDashboard);
