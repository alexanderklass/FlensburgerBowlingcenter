import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className="m-2 flex md:w-8/12 md:translate-x-48">
        <div>
          <p className="text-xl font-bold text-blue-500">Impressum</p>
          <p className="text-md">Christian Reinheimer</p>
          <p className="text-md">Rote Straße 15</p>
          <p className="text-md">24937 Flensburg</p>
          <p className="text-md">Parkhaus, 4. OG</p>
          <p className="text-lg font-bold text-blue-500">Steuernummern</p>
          <p className="text-md">Ust.IdNr.:DE337384814</p>
          <p className="text-md">St.-Nr.:1516506806</p>
          <Link to="/Datenschutz">
            <button className="text-blue-500">Datenschutz</button>
          </Link>
          <div className="justify-cente mt-1 flex flex-row">
            <BsTelephone className="m-1 " />
            <p>0461-48087676</p>
          </div>
          <div className="justify-cente mt-1 flex flex-row">
            <AiOutlineMail className="m-1 " />
            <p>Flensburger-bowlingcenter@t-online.de</p>
          </div>
          <div className="justify-cente mt-1 flex flex-row">
            <TbWorldWww className="m-1 " />
            <p>Flensburger-Bowlingcenter.de</p>
          </div>
          <p className="mt-3 text-lg font-bold text-blue-500">Social Media</p>
          <Link
            className="flex flex-row"
            to={"https://de-de.facebook.com/FlensburgerBowlingcenter/"}
          >
            <AiOutlineFacebook className="m-1 self-center" />
            <p>Facebook/FlensburgerBowlingcenter</p>
          </Link>
          <Link
            className="flex flex-row"
            to={"https://www.instagram.com/flensburgerbowlingcenter/?hl=de"}
          >
            <AiOutlineInstagram className="m-1 self-center" />
            <p>Instagram/flensburgerbowlingcenter</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
