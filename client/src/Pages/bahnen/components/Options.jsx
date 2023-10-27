import {RiCloseCircleLine} from "react-icons/ri";
import {BsFillFilePersonFill} from "react-icons/bs";
import {useState} from "react";
import {PropTypes} from "prop-types";
import Axios from "axios";
import SuccessBox from "../../../Components/SuccessBox.jsx";
import ConfirmBox from "../../../Components/ConfirmBox.jsx";
import WarningBox from "../../../Components/WarningBox.jsx";
import MiniLoader from "../../../Components/MiniLoader.jsx";
import MainButton from "../../../Components/MainButton.jsx";
import Draggable from "react-draggable";

const Options = ({
                     date,
                     optionsWindow,
                     laneDataArray,
                     laneFieldIndex,
                     clickCursor,
                     handleCloseOptionsWindow,
                     resetAndSetLaneData,
                     optionsTitle,
                     changeLaneOne,
                     setChangeLaneOne,
                     changeLaneTwo,
                     setChangeLaneTwo,
                     changeStartTime,
                     setChangeStartTime,
                     changeEndTime,
                     setChangeEndTime,
                     reverseBookingWarning,
                     setReverseBookingWarning,
                     changeNotes,
                     setChangeNotes,
                 }) => {
    const URL = import.meta.env.VITE_REACT_APP_URL;
    const [successPayment, setSuccessPayment] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);
    const [confirmDeleteBox, setConfirmDeleteBox] = useState(false);
    const [confirmPayedBox, setConfirmPayedBox] = useState(false);
    const [changeSuccess, setChangeSuccess] = useState(false);
    const [changeFailed, setChangeFailed] = useState(false);
    const [changeLoading, setChangeLoading] = useState(false);

    const handleDeleteConfirmBox = () => {
        setConfirmDeleteBox(!confirmDeleteBox);
        setConfirmPayedBox(false);
    };
    const handleSuccessDeleteBox = () => {
        setSuccessDelete(true);
        setTimeout(() => {
            setSuccessDelete(false);
        }, 3000);
    };

    const handleDeleteRequest = async () => {
        const {itemIndex, timeIndex} = laneFieldIndex;
        const {customerName, bahnID} = laneDataArray[itemIndex].time[timeIndex];
        await Axios.post(`${URL}/delete`, {
            id: bahnID,
            customerName: customerName,
            date: date,
        }).then((response, err) => {
            if (err) {
                console.log(err);
            } else if (response.data.message) {
                handleDeleteConfirmBox();
                handleSuccessDeleteBox();
                handleCloseOptionsWindow();
                resetAndSetLaneData();
            }
        });
    };

    const handlePayedConfirmBox = () => {
        setConfirmPayedBox(!confirmPayedBox);
        setConfirmDeleteBox(false);
    };
    const handlePayedSuccessBox = () => {
        setSuccessPayment(true);
        setTimeout(() => {
            setSuccessPayment(false);
        }, 3000);
    };

    const handleSuccessMessage = () => {
        setChangeSuccess(true);
        setTimeout(() => {
            setChangeSuccess(false);
        }, 3000);
    };
    const handleFailedMessage = () => {
        setChangeFailed(true);
        setTimeout(() => {
            setChangeFailed(false);
        }, 3000);
    };
    const postPaymentStatus = async () => {
        const {itemIndex, timeIndex} = laneFieldIndex;
        const {customerName, bahnID} = laneDataArray[itemIndex].time[timeIndex];
        await Axios.post(`${URL}/payment`, {
            customerName: customerName,
            id: bahnID,
            date: date,
            payedStatus: true,
        }).then((response, err) => {
            if (err) {
                console.log(err);
            } else if (response.data.message) {
                handlePayedSuccessBox();
                handlePayedConfirmBox();
                handleCloseOptionsWindow();
                resetAndSetLaneData();
            }
        });
    };

    const handlePostChangedData = async () => {
        const {itemIndex, timeIndex} = laneFieldIndex;
        const {customerName, bahnID} = laneDataArray[itemIndex].time[timeIndex];
        if (
            Number(changeLaneOne) > Number(changeLaneTwo) ||
            Number(changeStartTime) > Number(changeEndTime)
        ) {
            setReverseBookingWarning(true);
            setTimeout(() => {
                setReverseBookingWarning(false);
            }, 3000);
        } else {
            setChangeLoading(true);
            setTimeout(() => {
                setChangeLoading(false);
                handleOptionsChangePost(customerName, bahnID);
                handlePostOptionsNotes(customerName, bahnID);
                resetAndSetLaneData();
            }, 1000);
        }
    };

    const handleOptionsChangePost = async (customerName, bahnID) => {
        await Axios.post(`${URL}/optionsChange/${date}`, {
            customerName: customerName,
            id: bahnID,
            changeLaneOne: changeLaneOne,
            changeLaneTwo: changeLaneTwo,
            changeStartTime: changeStartTime,
            changeEndTime: changeEndTime,
        }).then((response, err) => {
            if (err) {
                console.log(err);
            } else if (response.data.success) {
                resetAndSetLaneData();
                handleCloseOptionsWindow();
                handleSuccessMessage();
            } else {
                handleFailedMessage();
            }
        });
    };

    const handlePostOptionsNotes = async (customerName, bahnID) => {
        await Axios.post(`${URL}/optionsNotes/${date}`, {
            customerName: customerName,
            id: bahnID,
            customerNotes: changeNotes,
        }).then((response, err) => {
            if (err) {
                console.log(err);
            }
        });
    };

    const styleObject = {
        top: clickCursor.y,
        left: clickCursor.x,
        position: "fixed",
    };

    return (
        <>
            <WarningBox
                condition={reverseBookingWarning}
                text={"Der erste Wert darf nicht größer sein!"}
            />
            <SuccessBox
                condition={changeSuccess}
                text={"Buchung erfolgreich verschoben!"}
            />
            <WarningBox
                condition={changeFailed}
                text={"Es ist eine Buchung schon vorhanden!"}
            />
            {confirmDeleteBox && (
                <ConfirmBox
                    handleYesButton={handleDeleteRequest}
                    handleNoButton={handleDeleteConfirmBox}
                    text={"Bist du sicher das du stornieren willst?"}
                />
            )}
            {confirmPayedBox && (
                <ConfirmBox
                    handleYesButton={postPaymentStatus}
                    handleNoButton={handlePayedConfirmBox}
                    text={"Die Buchung wurde bezahlt?"}
                />
            )}
            <SuccessBox
                condition={successDelete}
                text={"Buchung wurde erfolgreich gelöscht!"}
            />
            <SuccessBox
                condition={successPayment}
                text={"Buchung wurde erfolgreich auf bezahlt gestellt!"}
            />
            {optionsWindow && (
                <Draggable handle=".options-drag">
                    <div style={styleObject} className="flex flex-col transform  border border-black shadow-black shadow-md justify-center items-center rounded-lg bg-black p-2">
                        <div className="options-drag absolute bg-gray-300 left-0 rounded-t-lg right-0 top-0 h-5 cursor-move"></div>
                        <p className="mb-1 mt-6 flex w-40 items-center justify-center self-center rounded bg-yellow-500 p-1 text-center text-lg text-black">
                            <BsFillFilePersonFill className="mr-1"/> {optionsTitle}
                        </p>
                        <button
                            onClick={handleCloseOptionsWindow}
                            className="absolute right-0 top-0 text-white"
                        >
                            <RiCloseCircleLine className="text-xl text-red-600"/>
                        </button>
                        <div className="flex items-center justify-center">
                            <select
                                id="changeStartLane"
                                value={changeLaneOne}
                                onChange={(e) => {
                                    setChangeLaneOne(e.target.value);
                                }}
                                className="m-1 w-16 rounded p-1 text-center text-black"
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
                                    id="changeEndLane"
                                    value={changeLaneTwo}
                                    onChange={(e) => {
                                        setChangeLaneTwo(e.target.value);
                                    }}
                                    className="m-1 w-16 rounded p-1 text-center text-black"
                                >
                                    {Array.from({length: 12}, (_, index) => (
                                        <option key={index} value={index}>
                                            {index + 1}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="self-center">
                            <select
                                id="changeStartTime"
                                className="mx-1 rounded border border-gray-500 p-1 text-sm"
                                required
                                value={changeStartTime}
                                onChange={(e) => {
                                    setChangeStartTime(e.target.value);
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
                                    id="changeEndTime"
                                    className="mx-1 rounded border border-gray-500 p-1 text-sm text-black"
                                    required
                                    value={changeEndTime}
                                    onChange={(e) => {
                                        setChangeEndTime(e.target.value);
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
                        <div className="m-1 flex flex-col items-center justify-center">
                          <textarea
                              id="changeCustomerNotes"
                              value={changeNotes}
                              onChange={(e) => setChangeNotes(e.target.value)}
                              className="mb-2 h-24 w-40 rounded p-2"
                              placeholder="Notizen..."
                          />
                            <MainButton
                                color="bg-blue-700 hover:bg-blue-800"
                                disabled={changeLoading}
                                onClick={handlePostChangedData}
                            >
                                {changeLoading ? <MiniLoader/> : "ANPASSEN"}
                            </MainButton>
                        </div>
                        <div className="flex items-center justify-center">
                            <MainButton
                                color="bg-green-700 hover:bg-green-800"
                                onClick={handlePayedConfirmBox}
                            >
                                BEZAHLT
                            </MainButton>
                            <MainButton
                                color="bg-red-700 hover:bg-red-800"
                                onClick={handleDeleteConfirmBox}
                            >
                                STORNO
                            </MainButton>
                        </div>
                    </div>
                </Draggable>
            )}
        </>
    );
};

Options.propTypes = {
    date: PropTypes.string,
    optionsWindow: PropTypes.bool,
    setLanedDataArray: PropTypes.func,
    laneDataArray: PropTypes.array,
    laneFieldIndex: PropTypes.object,
    clickCursor: PropTypes.object,
    handleCloseOptionsWindow: PropTypes.func,
    resetAndSetLaneData: PropTypes.func,
    optionsTitle: PropTypes.string,
    setCheckBiggerThan: PropTypes.func,
    setChangeLaneOne: PropTypes.func,
    setChangeLaneTwo: PropTypes.func,
    setChangeStartTime: PropTypes.func,
    setChangeEndTime: PropTypes.func,
    changeLaneOne: PropTypes.number,
    changeLaneTwo: PropTypes.number,
    changeStartTime: PropTypes.number,
    changeEndTime: PropTypes.number,
    reverseBookingWarning: PropTypes.bool,
    setReverseBookingWarning: PropTypes.func,
    changeNotes: PropTypes.string,
    setChangeNotes: PropTypes.func,
};

export default Options;
