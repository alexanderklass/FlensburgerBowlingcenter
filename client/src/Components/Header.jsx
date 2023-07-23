import Icon from "../assets/images/bowling-icon.png";
import { PropTypes } from "prop-types";
import { GoGrabber } from "react-icons/go";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ className }) => {
  const [toggleHeaderButton, setToggleHeaderButton] = useState(false);

  const handleButtonToggler = () => {
    setToggleHeaderButton(!toggleHeaderButton);
  };
  return (
    <>
      <header className={className}>
        <div className="flex justify-center">
          <div className="hidden md:flex">
            <img src={Icon} alt="Icon" className="m-2 w-16" />
          </div>
          <div className="flex flex-col content-center justify-center">
            <p className="text-2xl font-bold">Flensburger Bowlingcenter</p>
            <p className="text-xl font-bold text-blue-500">
              Bowling & Gastronomie
            </p>
          </div>
        </div>

        <div className="mt-1 flex justify-center md:hidden">
          <GoGrabber
            className="cursor-pointer text-3xl"
            onClick={handleButtonToggler}
          />
        </div>

        <div className={`${toggleHeaderButton ? "" : "hidden md:block"} `}>
          <Link to="/">
            <button className="delay-50 m-1 h-8 rounded bg-blue-700 px-3 py-2 text-sm font-bold text-white transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-500">
              Start
            </button>
          </Link>
          <Link to="/Öffnungszeiten & Preise">
            <button className="delay-50 m-1 h-8 rounded bg-blue-700 px-3 py-2 text-sm font-bold text-white transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-500">
              Öffnungszeiten & Preise
            </button>
          </Link>
          <Link to="/Gastronomie">
            <button className="delay-50 m-1 h-8 rounded bg-blue-700 px-3 py-2 text-sm font-bold text-white transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-500">
              Gastronomie
            </button>
          </Link>
          <Link to="/Veranstaltungen">
            <button className="delay-50 m-1 h-8 rounded bg-blue-700 px-3 py-2 text-sm font-bold text-white transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-500">
              Veranstaltungen
            </button>
          </Link>
          <Link to="/Events 2023">
            <button className="delay-50 m-1 h-8 rounded bg-blue-700 px-3 py-2 text-sm font-bold text-white transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-500">
              Events 2023
            </button>
          </Link>
          <Link to="/Betriebssport">
            <button className="delay-50 m-1 h-8 rounded bg-blue-700 px-3 py-2 text-sm font-bold text-white transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-500">
              Betriebssport & Freizeit
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};
Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
