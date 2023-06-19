import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
const Info = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverInfo, setHoverInfo] = useState(false);

  const handleMouseEnter = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
    setHoverInfo(true);
  };
  const handleMousLeave = () => {
    setHoverInfo(false);
    setCursorPosition({ x: 0, y: 0 });
  };
  const postion = {
    left: cursorPosition.x - 340,
    top: cursorPosition.y - 40,
    postion: "fixed",
  };
  return (
    <>
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
