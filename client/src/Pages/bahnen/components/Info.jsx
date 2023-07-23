import { FcInfo } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";
import MiniLoader from "../../../Components/MiniLoader";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import Settings from "./Settings";
import DarkMode from "./DarkMode";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const Info = () => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverInfo, setHoverInfo] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [toggleSettings, setToggleSettings] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
    setHoverInfo(true);
  };
  const handleMousLeave = () => {
    setHoverInfo(false);
    setCursorPosition({ x: 0, y: 0 });
  };

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

  const postion = {
    left: cursorPosition.x - 190,
    top: cursorPosition.y - 50,
    postion: "fixed",
  };

  return (
    <>
      {toggleSettings && <Settings />}
      <div className="flex flex-row items-center justify-between self-end p-2">
        <div>
          <button>
            <Link to={"/portal"}>
              <BsArrowLeftSquareFill className="absolute left-2 top-2 text-4xl transition hover:scale-105" />
            </Link>
          </button>
          <Button
            sx={{ marginRight: 1 }}
            size="small"
            variant="contained"
            color="error"
            disabled={logoutLoading}
            onClick={handleLogout}
            endIcon={<LogoutIcon />}
          >
            {logoutLoading ? <MiniLoader /> : "Ausloggen"}
          </Button>
        </div>
        <DarkMode />
        <button onClick={handleSettings}>
          <FcSettings className="cursor-pointer text-4xl hover:animate-spin" />
        </button>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMousLeave}>
          <FcInfo className="cursor-pointer text-4xl hover:animate-pulse" />
        </div>
      </div>
      {hoverInfo && (
        <div className="relative">
          <div
            style={postion}
            className="absolute rounded-lg bg-zinc-700 p-3 text-white"
          >
            <p>Bei einem Notfall:</p>
            <p>01520/4291031</p>
            <p>alexklass16@gmail.com</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
