import { Link } from "react-router-dom";
import logo from "../Img/bowling-logo-white.png";
import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { GiBowlingPin } from "react-icons/gi";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineDensitySmall } from "react-icons/md";

const Sidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const toggleElement = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <>
      <aside
        className={`${
          toggleSidebar ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 z-40 w-44 h-screen transition-transform -translate-x-full`}
        aria-label="Sidebar"
      >
        <button
          onClick={toggleElement}
          className={`absolute ${toggleSidebar ? "translate-x-32 text-white" : "translate-x-44"} p-2 mt-2 ml-3 text-sm text-black rounded-lg hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200`}
        ><MdOutlineDensitySmall className="text-lg"/></button>

        <div className="h-full px-3 py-4 overflow-y-auto bg-zinc-800">
          <img src={logo} />
          <ul className="space-y-2">
            <li>
              <Link
                to={"/Portal"}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-700"
              >
                <BiHomeAlt />
                <span className="ml-3">Startseite</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/Portal/Bahnen"}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-700"
              >
                <GiBowlingPin />
                <span className="flex-1 ml-3 whitespace-nowrap">Bahnen</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/Portal/Arbeitszeiten"}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-700"
              >
                <SlCalender />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Arbeitszeiten
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
