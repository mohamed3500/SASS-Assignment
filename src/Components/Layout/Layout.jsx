import React from "react";
import Footer from "./../Footer/Footer";
import Sidebar from "./../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64 min min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
