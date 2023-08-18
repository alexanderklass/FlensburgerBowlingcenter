import Axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { FcSettings } from "react-icons/fc";
import { BiLogOut } from "react-icons/bi";
import Settings from "./Settings";
import MiniLoader from "../../../Components/MiniLoader";
import MainButton from "../../../Components/MainButton";

const Info = () => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [toggleSettings, setToggleSettings] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await Axios.get(`${URL}/logout`);
    if (response.data.success) {
      setLogoutLoading(true);
      setTimeout(() => {
        setLogoutLoading(false);
        navigate("/Login");
      }, 3000);
    } else {
      navigate("/portal/bahnen");
    }
  };

  const handleSettings = () => {
    setToggleSettings(!toggleSettings);
  };

  return (
    <>
      {toggleSettings && <Settings />}
      <div className="flex flex-row items-center justify-between self-end p-2">
        <div className="flex justify-center items-center">
          <button>
            <Link to={"/portal"}>
              <BsArrowLeftSquareFill className="absolute left-2 top-2 text-4xl transition hover:scale-105" />
            </Link>
          </button>
          <MainButton
            color={"bg-red-700 hover:bg-red-800"}
            onClick={handleLogout}
            disabled={logoutLoading}
          >
            <BiLogOut className="text-2xl mr-1"/>
            {logoutLoading ? <MiniLoader /> : "AUSLOGGEN"}
          </MainButton>
        </div>
        <button onClick={handleSettings}>
          <FcSettings className="cursor-pointer text-4xl hover:animate-spin" />
        </button>
      </div>
    </>
  );
};

export default Info;
