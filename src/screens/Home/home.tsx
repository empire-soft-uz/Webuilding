import { observer } from "mobx-react";
import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../../components/Dashboard/dashboard";
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
    }, 500);
  }, []);
  const [scrollTop, setScrollTop] = useState(0);
  const useRefPath = window.location.href;
  const handleScroll = (event: {
    currentTarget: { scrollTop: SetStateAction<number> };
  }) => {
    setScrollTop(event.currentTarget.scrollTop);
    onCloseModal();
    onCallMe();
  };

  const onCloseModal = useCallback(
    (name?: any) => {
      if (scrollTop > 300 && useRefPath === "http://localhost:3000/main") {
        appModals?.show("language");
      }
    },
    [scrollTop]
  );
  const onCallMe = useCallback(
    (name?: any) => {
      if (scrollTop > 400 && useRefPath === "http://localhost:3000/product") {
        appModals?.show("call_me_later");
      }
    },
    [scrollTop]
  );

  return (
    <div className={styles.container} onScroll={handleScroll}>
      <div className={styles.topAdvertising}>
        <img
          className={styles.topImage}
          src="https://yangiuylar.uz/wp-content/uploads/2022/07/kislorod32.jpg?v=1659158295"
          alt=""
        />
      </div>
      <Dashboard />
      <Outlet />
      <FilterModal />
    </div>
  );
};

export default observer(HomeView);
