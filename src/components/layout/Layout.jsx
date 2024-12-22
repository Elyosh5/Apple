import React from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainRoutes from "../../routes/MainRoutes";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <MainRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
