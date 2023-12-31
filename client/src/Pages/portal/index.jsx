import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FcReadingEbook } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import {checkLoginStatus} from "../../modules/checkLoginStatus.jsx";

const Portal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //checkLoginStatus(navigate);
  }, []);

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
