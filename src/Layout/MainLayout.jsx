import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <div className=" flex flex-col min-h-screen">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
        <div className="flex-grow w-11/12 mx-auto">
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
