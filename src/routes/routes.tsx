import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "../screens/Home/home";
import Main from "../screens/Home/views/Main/main";
import ProductPage from "../screens/Home/views/Product/product";
import { APP_ROUTES } from "./app-router";
import ProtectedRoute from "./protectRouter";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
