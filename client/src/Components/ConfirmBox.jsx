import { PropTypes } from "prop-types";
import MainButton from "./MainButton";
const ConfirmBox = ({ text, handleYesButton, handleNoButton }) => {
  return (
    <div className="absolute z-40 flex flex-col items-center justify-center rounded border border-black bg-green-300 p-7">
      <p className="text-md text-black">{text}</p>
      <div className="mt-5 flex flex-row text-white">
        <MainButton color="bg-green-800 hover:bg-green-900 w-14" onClick={handleYesButton}>JA</MainButton>
        <MainButton color="bg-red-800 hover:bg-red-900 w-14" onClick={handleNoButton}>NEIN</MainButton>
      </div>
    </div>
  );
};

ConfirmBox.propTypes = {
  text: PropTypes.string,
  handleYesButton: PropTypes.func,
  handleNoButton: PropTypes.func,
};

export default ConfirmBox;
