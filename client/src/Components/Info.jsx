import { FcInfo } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Info = () => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverInfo, setHoverInfo] = useState(false);
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
      navigate("/Login");
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
          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 p-1 mr-2 text-white transition ease-in-out hover:scale-105 hover:bg-red-400"
          >
            Ausloggen
          </button>
        </div>
        <div>
          <FcSettings className="text-4xl cursor-pointer" />
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMousLeave}>
          <FcInfo className="cursor-pointer text-4xl" />
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
