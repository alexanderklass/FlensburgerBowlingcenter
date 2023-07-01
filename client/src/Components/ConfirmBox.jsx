import { PropTypes } from "prop-types";
const ConfirmBox = ({ text, handleYesButton, handleNoButton }) => {
  return (
    <div className="absolute z-40 flex flex-col items-center justify-center rounded-lg border-2 border-black bg-green-200 p-7">
      <p className="text-md text-black">{text}</p>
      <div className="mt-5 flex flex-row text-white">
        <button
          onClick={handleYesButton}
          className="m-1 w-16 rounded-lg border border-black bg-green-500 p-2"
        >
          Ja
        </button>
        <button
          onClick={handleNoButton}
          className="m-1 w-16 rounded-lg border border-black bg-red-500 p-2"
        >
          Nein
        </button>
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
