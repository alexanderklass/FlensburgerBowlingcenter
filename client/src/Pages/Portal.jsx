import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Portal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === false) {
        navigate("/login");
      }
    });
  });

  return (
    <>
      <Outlet />
    </>
  );
};

export default Portal;
