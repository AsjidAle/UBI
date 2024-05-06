import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Utils from "../utils/Utils";


const Auth = () => {

  if (Utils.isLoggedIn()) {
    const landingpage = `${process.env.PUBLIC_URL}/landingpage`;
    return (<Navigate to={landingpage} />);
  }

  return (
    <div >
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default Auth;
