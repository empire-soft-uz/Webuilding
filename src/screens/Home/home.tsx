import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner/banner';
import Dashboard from '../../components/Dashboard/dashboard';
// import Header from '../../components/Header/header';
import Top from '../../components/Top/top';
import { ASSETS } from '../../constants/requireAssets';
import { APP_ROUTES } from '../../routes/app-router';
import styles from "./home.module.css"

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
            <div className={styles.dashboard}>
                <Dashboard />
            </div>
            <div className={styles.rightContainer}>
                <Outlet />
            </div>
        </div>
    )
}

export default HomeView;
