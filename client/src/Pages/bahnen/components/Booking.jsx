import {CgCloseR} from "react-icons/cg";
import {RiCloseCircleLine} from "react-icons/ri";
import WarningBox from "../../../Components/WarningBox.jsx";
import SuccessBox from "../../../Components/SuccessBox.jsx";
import ConfirmBox from "../../../Components/ConfirmBox.jsx";
import MiniLoader from "../../../Components/MiniLoader.jsx";
import MainButton from "../../../Components/MainButton.jsx";
import {useState} from "react";
import {PropTypes} from "prop-types";
import Draggable from "react-draggable";

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
                <div className="absolute">
                    {showCreateWindow && (
                        <div
                            className="relative p-3 shadow-black border border-black shadow-md flex md:top-40 flex-col scale-75 md:scale-100 justify-center items-center rounded-lg bg-black">
                            <button
                                onClick={handleCloseEvent}
                                className="absolute z-10 right-0 top-0 text-xl text-white"
                            >
                                <RiCloseCircleLine className="text-2xl hover:scale-110 transition-all text-red-600"/>
                            </button>
                            <div
                                className="drag absolute bg-gray-300 left-0 right-0 rounded-t-lg top-0 h-6 cursor-move"></div>
                            <input
                                id="customer-name"
                                type="text"
                                className="m-1 mt-6 h-8 md:h-10 w-[150px] md:w-[189px] rounded p-1 outline-0 placeholder:text-red-500"
                                placeholder="Kundenname*"
                                onChange={(e) => setCustomerName(e.target.value)}
                            />
                            <input
                                id="customer-number"
                                type="number"
                                className="m-1 h-8 md:h-10 w-[150px] md:w-[189px] rounded p-1 outline-0 placeholder:text-red-500"
                                placeholder="Telefonnummer*"
                                onChange={(e) => setCustomerNumber(e.target.value)}
                            />
                            <div className="mt-1 flex items-center justify-center">
                                <select
                                    id="startLane"
                                    value={laneOne}
                                    onChange={(e) => {
                                        setLaneOne(e.target.value);
                                    }}
                                    className="h-8 md:h-10 w-[65px] md:w-[84px] rounded p-1 text-center text-black"
                                >
                                    {Array.from({length: 12}, (_, index) => (
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
                                        className="h-8 md:h-10 w-[65px] md:w-[84px] rounded p-1 text-center text-black"
                                    >
                                        {Array.from({length: 12}, (_, index) => (
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
                                    className="h-8 md:h-10 w-[65px] md:w-[84px] text-xs md:text-base rounded border border-gray-500 p-1 text-center"
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
                                        className="h-8 md:h-10 w-[65px] md:w-[84px] text-xs md:text-base rounded border border-gray-500 p-1 text-center text-black"
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
                            <input
                                id="worker-name"
                                type="text"
                                className="m-1 h-8 md:h-10 rounded p-1 w-[150px] md:w-[189px] outline-0 placeholder:text-red-500"
                                placeholder="Eingetragen von*"
                                onChange={(e) => setWorkerName(e.target.value)}
                            />
                            <textarea
                                id="customer-notes"
                                className="rounded w-[150px] md:w-[189px] p-1 outline-0"
                                placeholder="Notizen..."
                                rows={3}
                                onChange={(e) => setNotes(e.target.value)}
                            />
                            <MainButton color={"bg-blue-700 mt-2 hover:bg-blue-800 w-[150px] md:w-[189px]"}
                                        onClick={checkBothLanes}
                                        disabled={bookingLoading}>
                                {bookingLoading ? <MiniLoader/> : "Hinzufügen"}
                            </MainButton>
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
};

export default Booking;
