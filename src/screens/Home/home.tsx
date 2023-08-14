import { observer } from "mobx-react";
import {
    SetStateAction,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../../components/Dashboard/dashboard";
import FilterModal from "../../components/FilterModal/filterModal";
import { useAppModals } from "../../components/Modals";
import useRootStore from "../../Hooks/useRootStore";
import { APP_ROUTES } from "../../routes/app-router";
import styles from "./home.module.css";

const HomeView = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const appModals = useAppModals();
    const { show, visiable, hide } = useRootStore().visibleStore;

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
    // const [scrollTop, setScrollTop] = useState(0);
    // console.log("scroll", scrollTop);
    // console.log("pathname", pathname);

    // const useRefPath = window.location.pathname;
    // const handleScroll = (event: {
    //     currentTarget: { scrollTop: SetStateAction<number> };
    // }) => {
    //     setScrollTop(event.currentTarget.scrollTop);
    //     onCloseModal();
    //     onCallMe();
    // };

    // const onCloseModal = useCallback(
    //     (name?: any) => {
    //         if (scrollTop > 300 && useRefPath === "/main") {
    //             appModals?.show("language");
    //         }
    //     },
    //     [scrollTop]
    // );
    // const onCallMe = useCallback(
    //     (name?: any) => {
    //         if (scrollTop > 400 && useRefPath === "/product") {
    //             appModals?.show("call_me_later");
    //         }
    //     },
    //     [scrollTop]
    // );

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return (
        <div className={styles.container}>
            {/* <div className={styles.topAdvertising}>
        <img
          className={styles.topImage}
          src="https://yangiuylar.uz/wp-content/uploads/2022/07/kislorod32.jpg?v=1659158295"
          alt=""
        />
      </div> */}
            <Outlet />
            <FilterModal />
        </div>
    );
};

export default observer(HomeView);
