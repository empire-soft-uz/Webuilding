import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "../screens/Home/home";
import Main from "../screens/Home/views/Main/main";
import ProductPage from "../screens/Home/views/Product/product";
import { APP_ROUTES } from "./app-router";
import ProtectedRoute from "./protectRouter";
import Developers from "../screens/Home/views/Developers/developers";
import DevelopersInfo from "../screens/Home/views/Developers/DevelopersInfo/developersInfo";
import AboutUsPage from "../screens/Home/views/AboutUs/AboutUs";
import CardDashboard from "../screens/Home/views/Card/cardDashboard";
import { Dashboard } from "@mui/icons-material";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={APP_ROUTES.HOME}
          element={
            <ProtectedRoute>
              <HomeView />
            </ProtectedRoute>
          }
        >
          <Route path={APP_ROUTES.MAIN} element={<Main />} />
          <Route path={APP_ROUTES.PRODUCT} element={<ProductPage />} />
          <Route path={APP_ROUTES.DEVELOPERS} element={<Developers />} />
          <Route path={APP_ROUTES.BUILDER} element={<DevelopersInfo />} />
          <Route path={APP_ROUTES.ABOUT_US} element={<AboutUsPage />} />
          <Route path={APP_ROUTES.Card} element={<CardDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
