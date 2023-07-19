import { AiOutlineClose } from "react-icons/ai";
import WarningBox from "./WarningBox.jsx";
import SuccessBox from "./SuccessBox.jsx";
import ConfirmBox from "./ConfirmBox.jsx";
import { useState } from "react";
import { PropTypes } from "prop-types";
import MiniLoader from "./MiniLoader.jsx";
import Textfield from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Draggable from "react-draggable";

const Booking = ({
  customerName,
  workerName,
  customerNumber,
  showCreateWindow,
  handleCloseEvent,
  setCustomerName,
  setCustomerNumber,
  setLaneOne,
  setLaneTwo,
  laneOne,
  laneTwo,
  startTime,
  endTime,
  setStartTime,
  setEndTime,
  setWorkerName,
  setNotes,
  handleLaneRequest,
  missingFields,
  overwriteWarning,
  successBooking,
  bookingLoading,
}) => {
  const [checkBackBooking, setCheckBackBooking] = useState(false);

  const checkBothLanes = () => {
    if (Number(laneOne) === Number(laneTwo)) {
      handleLaneRequest();
    } else if (laneTwo % 2 === 0) {
      setCheckBackBooking(true);
    } else {
      handleLaneRequest();
    }
  };

  const handleCheckLaneNo = () => {
    setCheckBackBooking(false);
  };

  const handleCheckLaneYes = () => {
    handleLaneRequest();
    setCheckBackBooking(false);
  };
  return (
    <>
      {checkBackBooking && (
        <ConfirmBox
          handleYesButton={handleCheckLaneYes}
          handleNoButton={handleCheckLaneNo}
          text={"Du buchst Rücken an Rücken! Trotzdem buchen?"}
        />
      )}
      <SuccessBox
        condition={successBooking}
        text={"Bahn wurde erfolgreich gebucht!"}
      />

      <WarningBox
        condition={missingFields}
        text={"Bitte alle wichtigen Felder ausfüllen!"}
      />

      <WarningBox
        condition={overwriteWarning}
        text={"Für diese Buchung existieren schon Felder"}
      />
      <Draggable handle=".drag">
        <div className="absolute top-72 z-30">
          {showCreateWindow && (
            <div className="h-78 box-shadow align-items-center relative flex flex-col justify-center rounded bg-zinc-700 p-6 shadow-lg">
              <button
                onClick={handleCloseEvent}
                className="absolute right-0 top-0 m-1 text-xl text-white"
              >
                <AiOutlineClose />
              </button>
              <div className="drag absolute left-0 right-7 top-0 h-7 cursor-move"></div>
              <Textfield
                error={customerName === ""}
                id="customerName"
                margin="dense"
                label="Kundenname"
                variant="filled"
                type="text"
                className={`rounded bg-white`}
                onChange={(e) => setCustomerName(e.target.value)}
                required
                size="small"
              />
              <Textfield
                error={customerNumber === ""}
                id="customerNumber"
                margin="none"
                label="Telefonnummer"
                variant="filled"
                type="number"
                className="rounded bg-white"
                onChange={(e) => setCustomerNumber(e.target.value)}
                required
                size="small"
              />
              <div className="mt-1 flex items-center justify-center">
                <select
                  id="startLane"
                  value={laneOne}
                  onChange={(e) => {
                    setLaneOne(e.target.value);
                  }}
                  className="h-10 w-24 rounded p-1 text-center text-black"
                >
                  {Array.from({ length: 12 }, (_, index) => (
                    <option key={index} value={index}>
                      {index + 1}
                    </option>
                  ))}
                </select>
                <label className="text-white">
                  bis
                  <select
                    id="endLane"
                    value={laneTwo}
                    onChange={(e) => {
                      setLaneTwo(e.target.value);
                    }}
                    className="h-10 w-24 rounded p-1 text-center text-black"
                  >
                    {Array.from({ length: 12 }, (_, index) => (
                      <option key={index} value={index}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="mt-1 flex items-center justify-center">
                <select
                  id="startTime"
                  className="h-10 w-24 rounded border border-gray-500 p-1 text-center"
                  required
                  value={startTime}
                  onChange={(e) => {
                    setStartTime(e.target.value);
                  }}
                >
                  <option value={0}>16:00</option>
                  <option value={1}>16:30</option>
                  <option value={2}>17:00</option>
                  <option value={3}>17:30</option>
                  <option value={4}>18:00</option>
                  <option value={5}>18:30</option>
                  <option value={6}>19:00</option>
                  <option value={7}>19:30</option>
                  <option value={8}>20:00</option>
                  <option value={9}>20:30</option>
                  <option value={10}>21:00</option>
                  <option value={11}>21:30</option>
                  <option value={12}>22:00</option>
                  <option value={13}>22:30</option>
                  <option value={14}>23:00</option>
                  <option value={15}>23:30</option>
                  <option value={16}>00:00</option>
                  <option value={17}>00:30</option>
                </select>
                <label className="text-white">
                  bis
                  <select
                    id="endTime"
                    className="h-10 w-24 rounded border border-gray-500 p-1 text-center text-black"
                    required
                    value={endTime}
                    onChange={(e) => {
                      setEndTime(e.target.value);
                    }}
                  >
                    <option value={0}>16:30</option>
                    <option value={1}>17:00</option>
                    <option value={2}>17:30</option>
                    <option value={3}>18:00</option>
                    <option value={4}>18:30</option>
                    <option value={5}>19:00</option>
                    <option value={6}>19:30</option>
                    <option value={7}>20:00</option>
                    <option value={8}>20:30</option>
                    <option value={9}>21:00</option>
                    <option value={10}>21:30</option>
                    <option value={11}>22:00</option>
                    <option value={12}>22:30</option>
                    <option value={13}>23:00</option>
                    <option value={14}>23:30</option>
                    <option value={15}>00:00</option>
                    <option value={16}>00:30</option>
                    <option value={17}>01:00</option>
                  </select>
                </label>
              </div>

              <Textfield
                error={workerName === ""}
                id="workerName"
                margin="dense"
                label="Eingetragen von..."
                variant="filled"
                type="text"
                className="rounded bg-white"
                onChange={(e) => setWorkerName(e.target.value)}
                required
                size="small"
              />
              <Textfield
                id="customerNotes"
                margin="none"
                label="Anmerkungen..."
                type="text"
                variant="filled"
                multiline={true}
                rows={3}
                className="rounded bg-white"
                onChange={(e) => setNotes(e.target.value)}
                size="small"
              />
              <Button
                sx={{ marginTop: 1 }}
                variant="contained"
                onClick={checkBothLanes}
              >
                {bookingLoading ? <MiniLoader /> : "Hinzufügen"}
              </Button>
            </div>
          )}
        </div>
      </Draggable>
    </>
  );
};

Booking.propTypes = {
  showCreateWindow: PropTypes.bool,
  handleCloseEvent: PropTypes.func,
  setCustomerName: PropTypes.func,
  setCustomerNumber: PropTypes.func,
  setLaneOne: PropTypes.func,
  setLaneTwo: PropTypes.func,
  laneOne: PropTypes.number,
  laneTwo: PropTypes.number,
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  setStartTime: PropTypes.func,
  setEndTime: PropTypes.func,
  setWorkerName: PropTypes.func,
  setNotes: PropTypes.func,
  handleLaneRequest: PropTypes.func,
  missingFields: PropTypes.bool,
  overwriteWarning: PropTypes.bool,
  successBooking: PropTypes.bool,
  bookingLoading: PropTypes.bool,
  customerName: PropTypes.string,
  customerNumber: PropTypes.string,
  workerName: PropTypes.string,
};

export default Booking;
