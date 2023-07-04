import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";
const ConfirmBox = ({ text, handleYesButton, handleNoButton }) => {
  return (
    <div className="absolute z-40 flex flex-col items-center justify-center rounded border border-black bg-green-300 p-7">
      <p className="text-md text-black">{text}</p>
      <div className="mt-5 flex flex-row text-white">
        <Button sx={{marginRight:2}} variant="contained" color="success" onClick={handleYesButton}>
          Ja
        </Button>
        <Button variant="contained" color="error" onClick={handleNoButton}>
          Nein
        </Button>
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
