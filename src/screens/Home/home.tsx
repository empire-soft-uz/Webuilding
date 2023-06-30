import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../../components/Dashboard/dashboard";
// import Header from '../../components/Header/header';
import { APP_ROUTES } from "../../routes/app-router";
import styles from "./home.module.css";
import { observer } from "mobx-react";
import FilterModal from "../../components/FilterModal/filterModal";

const HomeView = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate(APP_ROUTES.MAIN);
    }
  }, [pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <Dashboard />
      </div>
      <div className={styles.rightContainer}>
        <Outlet />
      </div>
      <FilterModal />
    </div>
  );
};

export default observer(HomeView);
