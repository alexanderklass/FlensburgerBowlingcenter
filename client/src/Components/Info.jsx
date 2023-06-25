import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Info = () => {
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

  const handleLogout = () =>{
    Cookies.remove("user");
    navigate("/Login");
  }

  const postion = {
    left: cursorPosition.x - 190,
    top: cursorPosition.y,
    postion: "fixed",
  };

  return (
    <>
      <div className="absolute right-14 top-3">
        <button onClick={handleLogout} className="rounded-lg bg-red-500 p-1 text-white transition ease-in-out hover:scale-105 hover:bg-red-400">
          Ausloggen
        </button>
      </div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMousLeave}>
        <AiOutlineInfoCircle className="absolute right-2 top-2 cursor-pointer text-4xl" />
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
