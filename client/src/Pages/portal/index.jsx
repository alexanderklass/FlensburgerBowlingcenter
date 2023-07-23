import Axios from "axios";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FcReadingEbook } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";

const Portal = () => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const checkForLoginStatus = () => {
    try {
      const response = Axios.get(`${URL}/login`);
      if (response.data.loggedIn === false) {
        setIsLoggedIn(false);
        navigate("/login");
      }
    } catch (error) {
      if (error) {
        //
      }
    }
  };
  useEffect(() => {
    checkForLoginStatus();
    //eslint-disable-next-line
  }, []);

  if(!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link to={"/bahnen"}>
          <div className="flex h-28 w-56 cursor-pointer flex-col items-center justify-center rounded border shadow-lg transition hover:translate-y-1 hover:scale-105">
            <FcReadingEbook className="text-4xl" />
            <p className="font-bold">Buchungen</p>
          </div>
        </Link>

        <Link to={"/arbeitszeiten"}>
          <div className="flex h-28 w-56 cursor-pointer flex-col items-center justify-center rounded border shadow-lg transition hover:translate-y-1 hover:scale-105">
            <FcCalendar className="text-4xl" />
            <p className="font-bold">Arbeitszeiten</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portal;
