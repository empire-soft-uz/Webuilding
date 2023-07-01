import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/dashboard';
// import Header from '../../components/Header/header';
import { APP_ROUTES } from '../../routes/app-router';
import styles from "./home.module.css";
import { observer } from 'mobx-react';
import FilterModal from '../../components/FilterModal/filterModal';
import ContactModal from '../../components/ContactModal/contactModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeView = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (pathname === '/') {
            navigate(APP_ROUTES.MAIN);
        }
    }, [pathname]);

    return (
        <div className={styles.container}>
            <ToastContainer
                position='top-center'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
            <div className={styles.dashboard}>
                <Dashboard />
            </div>
            <div className={styles.rightContainer}>
                <Outlet />
            </div>
            <FilterModal />
            <ContactModal />
        </div>
    )
}

export default observer(HomeView);
