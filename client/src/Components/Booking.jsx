import { AiOutlineClose } from "react-icons/ai";
import WarningBox from "./WarningBox.jsx";
import SuccessBox from "./SuccessBox.jsx";
import ConfirmBox from "./ConfirmBox.jsx";
import { useState } from "react";
import { PropTypes } from "prop-types";
import MiniLoader from "./MiniLoader.jsx";

const Booking = ({
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
  colorArray,
  colorIndex,
  setColorIndex,
  setGridColor,
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
    if (laneOne === laneTwo) {
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
      {successBooking && (
        <SuccessBox text={"Bahn wurde erfolgreich gebucht!"} />
      )}
      {missingFields && (
        <WarningBox text={"Bitte alle wichtigen Felder ausfüllen!"} />
      )}
      {overwriteWarning && (
        <WarningBox text={"Für diese Buchung existieren schon Felder"} />
      )}
      <div className="absolute top-72">
        {showCreateWindow && (
          <div className="h-78 box-shadow align-items-center relative flex w-60 flex-col justify-center rounded-lg border-2 border-gray-500 bg-zinc-700 p-6 shadow-lg">
            <button
              onClick={handleCloseEvent}
              className="absolute right-0 top-0 m-1 text-xl text-white"
            >
              <AiOutlineClose />
            </button>
            <input
              name="customerName"
              onChange={(e) => setCustomerName(e.target.value)}
              type="text"
              id="name"
              placeholder="*Kundenname"
              className="m-1 w-52 self-center rounded-lg border border-gray-500 p-1"
            />
            <input
              name="customerNumber"
              onChange={(e) => setCustomerNumber(e.target.value)}
              type="text"
              placeholder="*Telefonnummer"
              className="mb-2 w-52 self-center rounded-lg border border-gray-500 p-1"
            />
            <div className="w-52 self-center">
              <label className="text-white">
                Bahn:
                <select
                  value={laneOne}
                  required
                  onChange={(e) => setLaneOne(e.target.value)}
                  className="mx-1 rounded-lg border border-gray-500 p-1 text-black"
                >
                  <option value={0}>1</option>
                  <option value={1}>2</option>
                  <option value={2}>3</option>
                  <option value={3}>4</option>
                  <option value={4}>5</option>
                  <option value={5}>6</option>
                  <option value={6}>7</option>
                  <option value={7}>8</option>
                  <option value={8}>9</option>
                  <option value={9}>10</option>
                  <option value={10}>11</option>
                  <option value={11}>12</option>
                </select>
              </label>
              <label className="text-white">
                bis:
                <select
                  value={laneTwo}
                  required
                  onChange={(e) => setLaneTwo(e.target.value)}
                  className="mx-1 rounded-lg border border-gray-500 p-1 text-black"
                >
                  <option value={0}>1</option>
                  <option value={1}>2</option>
                  <option value={2}>3</option>
                  <option value={3}>4</option>
                  <option value={4}>5</option>
                  <option value={5}>6</option>
                  <option value={6}>7</option>
                  <option value={7}>8</option>
                  <option value={8}>9</option>
                  <option value={9}>10</option>
                  <option value={10}>11</option>
                  <option value={11}>12</option>
                </select>
              </label>
            </div>
            <div className="mt-1 w-52 self-center">
              <label>
                <select
                  className="mx-1 rounded-lg border border-gray-500 p-1"
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
              </label>
              <label className="text-white">
                Bis
                <select
                  className="mx-1 rounded-lg border border-gray-500 p-1 text-black"
                  required
                  value={endTime}
                  onChange={(e) => {
                    setEndTime(e.target.value);
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
              </label>
            </div>
            <div className="mt-2 flex w-52 cursor-pointer flex-row items-center justify-center self-center">
              {colorArray.map((color, index) => {
                return (
                  <div
                    key={index}
                    className={`${color.colorGrid} h-5 w-5 ${
                      colorIndex === index ? "border-2" : ""
                    } rounded-lg border border-black`}
                    onClick={() => {
                      setColorIndex(index);
                      setGridColor(color.colorGrid);
                    }}
                  ></div>
                );
              })}
            </div>
            <input
              name="workerName"
              className="mt-1 w-52 self-center rounded-lg border border-gray-500 p-1"
              placeholder="*Eingetragen von..."
              type="text"
              onChange={(e) => setWorkerName(e.target.value)}
            />
            <textarea
              name="Notes"
              className="mt-1 h-20 w-52 self-center rounded-lg border border-gray-500 p-1"
              placeholder="Anmerkungen..."
              onChange={(e) => setNotes(e.target.value)}
              rows={10}
              cols={50}
            />
            <button
              onClick={checkBothLanes}
              className=" delay-50 hover:scale-101 mt-2 h-8 w-52 self-center rounded bg-blue-500 px-3 py-2 text-sm font-bold text-white transition ease-in-out hover:-translate-y-1 hover:bg-blue-600"
            >
              {bookingLoading ? <MiniLoader /> : "Hinzufügen"}
            </button>
          </div>
        )}
      </div>
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
  colorArray: PropTypes.array,
  colorIndex: PropTypes.number,
  setColorIndex: PropTypes.func,
  setGridColor: PropTypes.string,
  setWorkerName: PropTypes.func,
  setNotes: PropTypes.func,
  handleLaneRequest: PropTypes.func,
  missingFields: PropTypes.bool,
  overwriteWarning: PropTypes.bool,
  successBooking: PropTypes.bool,
  bookingLoading: PropTypes.bool,
};

export default Booking;
