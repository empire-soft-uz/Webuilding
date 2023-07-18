import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../../components/Dashboard/dashboard";
import { observer } from "mobx-react";
import FilterModal from "../../components/FilterModal/filterModal";
import { useAppModals } from "../../components/Modals";
import { APP_ROUTES } from "../../routes/app-router";
import styles from "./home.module.css";

const HomeView = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const appModals = useAppModals();

  useEffect(() => {
    if (pathname === "/") {
      navigate(APP_ROUTES.MAIN);
    }
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      appModals?.show("advertising");
    }, 1000);
  }, []);

  return (
    <div className={styles.container}>
      {/* <div className={styles.topAdvertising}>
        <img
          className={styles.topImage}
          src="https://yangiuylar.uz/wp-content/uploads/2022/07/kislorod32.jpg?v=1659158295"
          alt=""
        />
      </div> */}
      <Dashboard />
      <Outlet />
      <FilterModal />
    </div>
  );
};

export default observer(HomeView);
