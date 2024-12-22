import React from "react";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import { Route, Routes } from "react-router-dom";
import ProductList from "../components/products/ProductList";
import DetailsPage from "../pages/DetailsPage";
import CartPage from "../pages/CartPage";
import MacPage from "../components/products/productCategory/Mac/MacPage";
import IPad from "../components/products/productCategory/iPad/IPad";
import AirPods from "../components/products/productCategory/airPods/AirPods";
import IphonePage from "../components/products/productCategory/iPhone/IphonePage";
import WatchPage from "../components/products/productCategory/watch/WatchPage";
import SupportPage from "../components/products/productCategory/Support/SupportPage";
import AccessoriesPage from "../components/products/productCategory/Accessories/AccessoriesPage";
import EntertainmentPage from "../components/products/productCategory/Entertainment/EntertainmentPage";
import VisionPage from "../components/products/productCategory/vision/VisionPage";
import TvHomePage from "../components/products/productCategory/tvHome/TvHomePage";
import SignIn from "../components/profile/SignIn";
import SignUp from "../components/profile/SignUp";
import { ADMIN } from "../helpers/const";
import { useAuth } from "../context/AuthContext";

const ADMIN_ROUTES = [
  {
    link: "/admin",
    element: <AdminPage />,
    id: 1,
  },
  {
    link: "/edit/:id",
    element: <EditPage />,
    id: 2,
  },
];

const PUBLIC_ROUTES = [
  {
    link: "/list",
    element: <ProductList />,
    id: 1,
  },
  {
    link: "/details/:id",
    element: <DetailsPage />,
    id: 2,
  },
  {
    link: "/cart",
    element: <CartPage />,
    id: 3,
  },
  {
    link: "/Mac",
    element: <MacPage />,
    id: 4,
  },
  {
    link: "/iPad",
    element: <IPad />,
    id: 5,
  },
  {
    link: "/iPhone",
    element: <IphonePage />,
    id: 6,
  },
  {
    link: "/Watch",
    element: <WatchPage />,
    id: 7,
  },
  {
    link: "/Vision",
    element: <VisionPage />,
    id: 8,
  },
  {
    link: "/Airpods",
    element: <AirPods />,
    id: 9,
  },
  {
    link: "/TV",
    element: <TvHomePage />,
    id: 10,
  },
  {
    link: "/Entertainment",
    element: <EntertainmentPage />,
    id: 11,
  },
  {
    link: "/Accessories",
    element: <AccessoriesPage />,
    id: 12,
  },
  {
    link: "/Support",
    element: <SupportPage />,
    id: 13,
  },
  {
    link: "/Login",
    element: <SignIn />,
    id: 14,
  },
  {
    link: "/Register",
    element: <SignUp />,
    id: 14,
  },
];

const MainRoutes = () => {
  const { user } = useAuth();
  return (
    <Routes>
      {user
        ? ADMIN.map((el) =>
            el.email === user.email
              ? ADMIN_ROUTES.map((el) => (
                  <Route path={el.link} element={el.element} key={el.id} />
                ))
              : null
          )
        : null}
      {PUBLIC_ROUTES.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};
export default MainRoutes;
