import { FcInfo } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import MiniLoader from "./MiniLoader";
import Button from "@mui/material/Button";

const Info = () => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverInfo, setHoverInfo] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
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
    if(response.data.success){
      setLogoutLoading(true);
      setTimeout(()=>{
        setLogoutLoading(false);
        navigate("/Login");
      },3000);
    }else{
      navigate("/portal/bahnen");
    }
  };

  const postion = {
    left: cursorPosition.x - 190,
    top: cursorPosition.y -50,
    postion: "fixed",
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center self-end p-2">
        <div>
          <Button
            sx={{marginRight:1}}
            size="small"
            variant="contained"
            color="error" 
            disabled={logoutLoading}
            onClick={handleLogout}>
          {logoutLoading ? <MiniLoader/> : "Ausloggen"}
          </Button>
        </div>
        <div>
          <FcSettings className="text-4xl hover:animate-spin cursor-pointer"/>
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMousLeave}>
          <FcInfo className="hover:animate-pulse cursor-pointer text-4xl" />
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
