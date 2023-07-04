import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Portal = () => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const navigate = useNavigate();
  const checkForLoginStatus = () => {
    Axios.get(`${URL}/login`).then((response) => {
      if (response.data.loggedIn === false) {
        navigate("/login");
      }
    });
  };
  useEffect(() => {
    checkForLoginStatus();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Portal;
