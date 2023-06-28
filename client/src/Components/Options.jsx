import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { PropTypes } from "prop-types";
import Axios from "axios";
import SuccessBox from "./SuccessBox.jsx";
import ConfirmBox from "./ConfirmBox.jsx";
import WarningBox from "./WarningBox.jsx";
import MiniLoader from "./MiniLoader.jsx";
const Options = ({
  date,
  optionsWindow,
  setLanedDataArray,
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
  const handleDeleteLane = () => {
    const clonedArray = [...laneDataArray];
    const indexOne = laneFieldIndex.itemIndex;
    const indexTwo = laneFieldIndex.timeIndex;
    const { customerNumber, customerName } =
      clonedArray[indexOne].time[indexTwo];
    for (let i = 0; i < clonedArray.length; i++) {
      for (let j = 0; j < clonedArray[i].time.length; j++) {
        if (
          clonedArray[i].time[j].customerNumber === customerNumber &&
          clonedArray[i].time[j].customerName === customerName
        ) {
          clonedArray[i].time[j] = {
            customerName: "",
            customerNumber: "",
            color: "",
            workerName: "",
            notes: "",
            payedStatus: false,
          };
        }
      }
    }
    setLanedDataArray(clonedArray);
    handleDeleteRequest(customerNumber, customerName);
    handleCloseOptionsWindow();
  };
  const handleDeleteRequest = async (customerNumber, customerName) => {
    await Axios.post(`${URL}/delete`, {
      customerNumber: customerNumber,
      customerName: customerName,
      date: date,
    }).then((response, err) => {
      if (err) {
        console.log(err);
      } else if (response.data.message) {
        handleSuccessDeleteBox();
        handleDeleteConfirmBox();
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
  const handlePayedButton = () => {
    const clonedArray = [...laneDataArray];
    const indexOne = laneFieldIndex.itemIndex;
    const indexTwo = laneFieldIndex.timeIndex;
    const { customerName, customerNumber } =
      clonedArray[indexOne].time[indexTwo];
    for (let i = 0; i < clonedArray.length; i++) {
      for (let j = 0; j < clonedArray[i].time.length; j++) {
        if (
          clonedArray[i].time[j].customerName === customerName &&
          clonedArray[i].time[j].customerNumber === customerNumber
        ) {
          clonedArray[i].time[j].payedStatus = true;
        }
      }
    }
    postPaymentStatus(customerName, customerNumber);
    setLanedDataArray(clonedArray);
    handleCloseOptionsWindow();
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
  const postPaymentStatus = async (customerName, customerNumber) => {
    await Axios.post(`${URL}/payment`, {
      customerName: customerName,
      customerNumber: customerNumber,
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
    const indexOne = laneFieldIndex.itemIndex;
    const indexTwo = laneFieldIndex.timeIndex;
    const { customerName, customerNumber } =
      laneDataArray[indexOne].time[indexTwo];
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
        handleOptionsChangePost(customerName, customerNumber);
        handlePostOptionsNotes(customerName, customerNumber);
      }, 3000);
    }
  };

  const handleOptionsChangePost = async (customerName, customerNumber) => {
    await Axios.post(`${URL}/optionsChange/${date}`, {
      customerName: customerName,
      customerNumber: customerNumber,
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

  const handlePostOptionsNotes = async (customerName, customerNumber) => {
    await Axios.post(`${URL}/optionsNotes/${date}`, {
      customerName: customerName,
      customerNumber: customerNumber,
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
      {reverseBookingWarning && (
        <WarningBox text={"Der erste Wert darf nicht größer sein!"} />
      )}
      {changeSuccess && <SuccessBox text={"Buchung erfolgreich verschoben!"} />}
      {changeFailed && (
        <WarningBox text={"Es ist eine Buchung schon vorhanden!"} />
      )}
      {confirmDeleteBox && (
        <ConfirmBox
          handleYesButton={handleDeleteLane}
          handleNoButton={handleDeleteConfirmBox}
          text={"Bist du sicher das du stornieren willst?"}
        />
      )}
      {confirmPayedBox && (
        <ConfirmBox
          handleYesButton={handlePayedButton}
          handleNoButton={handlePayedConfirmBox}
          text={"Die Buchung wurde bezahlt?"}
        />
      )}
      {successDelete && (
        <SuccessBox text={"Buchung wurde erfolgreich gelöscht!"} />
      )}
      {successPayment && (
        <SuccessBox text={"Buchung wurde erfolgreich auf bezahlt gestellt!"} />
      )}
      {optionsWindow && (
        <div
          style={styleObject}
          className="align-center relative z-10 flex flex-col justify-center rounded-lg border-2 border-gray-500 bg-zinc-700 p-2 p-2"
        >
          <p className="mb-5 text-center text-3xl text-yellow-500">
            {optionsTitle}
          </p>
          <button
            onClick={handleCloseOptionsWindow}
            className="absolute right-0 top-0 p-1 text-white"
          >
            <AiOutlineClose />
          </button>
          <div className="self-center">
            <label className="text-white">
              Bahn
              <select
                value={changeLaneOne}
                onChange={(e) => {
                  setChangeLaneOne(e.target.value);
                }}
                className="m-1 rounded-lg p-1 text-black"
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
              bis
              <select
                value={changeLaneTwo}
                onChange={(e) => {
                  setChangeLaneTwo(e.target.value);
                }}
                className="m-1 rounded-lg p-1 text-black"
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
          <div className="self-center">
            <select
              className="mx-1 rounded-lg border border-gray-500 p-1"
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
                className="mx-1 rounded-lg border border-gray-500 p-1 text-black"
                required
                value={changeEndTime}
                onChange={(e) => {
                  setChangeEndTime(e.target.value);
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
          <div className="m-1 flex flex-col items-center justify-center">
            <textarea
              value={changeNotes}
              onChange={(e) => setChangeNotes(e.target.value)}
              className="h-24 rounded-lg"
              placeholder="Notizen..."
            />
            <button
              disabled={changeLoading}
              onClick={handlePostChangedData}
              className="mt-3 h-8 w-24 rounded-lg bg-yellow-500 p-1 text-black disabled:bg-gray-500"
            >
              {changeLoading ? <MiniLoader /> : "Anpassen"}
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handlePayedConfirmBox}
              className="m-1 w-20 self-center rounded-lg bg-green-500 p-1 text-white "
            >
              Bezahlt
            </button>
            <button
              onClick={handleDeleteConfirmBox}
              className="m-1 w-20 self-center rounded-lg bg-red-500 p-1 text-white"
            >
              Storno
            </button>
          </div>
        </div>
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
  setReverseBookingWarning: PropTypes.bool,
  changeNotes: PropTypes.string,
  setChangeNotes: PropTypes.func,
};

export default Options;
