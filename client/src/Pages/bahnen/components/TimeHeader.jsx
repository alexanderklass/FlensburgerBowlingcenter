import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import MainButton from "../../../Components/MainButton";

const TimeHeader = ({
  handleCreateEvent,
  setShowCreateWindow,
  setOptionsWindow,
  resetLaneStates,
  date,
  setDate,
  setDisplayDay,
  displayDay,
}) => {
  const handleBackButton = () => {
    const today = new Date(date);
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const dateString = yesterday.toLocaleDateString("en-CA");
    const dayString = yesterday.toLocaleDateString("de-DE", {
      weekday: "long",
    });
    setDisplayDay(dayString);
    setDate(dateString);
    setShowCreateWindow(false);
    setOptionsWindow(false);
    resetLaneStates();
  };

  const handleNextButton = () => {
    const today = new Date(date);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dateString = tomorrow.toLocaleDateString("en-CA");
    const dayString = tomorrow.toLocaleDateString("de-DE", {
      weekday: "long",
    });
    setDisplayDay(dayString);
    setDate(dateString);
    setShowCreateWindow(false);
    setOptionsWindow(false);
    resetLaneStates();
  };

  const handleTimeChange = () => {
    setDate(new Date().toLocaleDateString("en-CA"));
    setDisplayDay(
      new Date().toLocaleDateString("de-DE", {
        weekday: "long",
      })
    );
  };

  const handleStartUpTime = () => {
    const firstDate = new Date();
    const dateString = firstDate.toLocaleDateString("en-CA");
    if (date === "" && displayDay === "") {
      setDate(dateString);
      setDisplayDay(
        new Date().toLocaleDateString("de-DE", {
          weekday: "long",
        })
      );
    }
  };

  const handleDatePicker = (event) => {
    setDate(event.target.value);
    const selectedDate = new Date(event.target.value);
    setDisplayDay(
      selectedDate.toLocaleDateString("de-DE", {
        weekday: "long",
      })
    );
  };

  useEffect(() => {
    handleStartUpTime();
    //eslint-disable-next-line
  }, [date]);

  return (
    <div className="mt-2 flex justify-center items-center rounded bg-black p-2 text-white">
      <button onClick={handleBackButton}>
        <GoArrowLeft className="self-center text-3xl" />
      </button>
      <div className="flex flex-row justify-center items-center text-sm">
        <MainButton color={"bg-blue-700"} onClick={handleCreateEvent}>
          NEUER EINTRAG
        </MainButton>
        <MainButton color={"bg-green-800"} onClick={handleTimeChange}>
          HEUTE
        </MainButton>
        <input
          className="rounded text-black h-8 p-2 m-1"
          type="date"
          value={date}
          onChange={handleDatePicker}
        />
      </div>
      <button onClick={handleNextButton}>
        <GoArrowRight className="self-center text-3xl" />
      </button>
    </div>
  );
};

TimeHeader.propTypes = {
  handleCreateEvent: PropTypes.func,
  setShowCreateWindow: PropTypes.func,
  setOptionsWindow: PropTypes.func,
  resetLaneStates: PropTypes.func,
  date: PropTypes.string,
  setDate: PropTypes.func,
  setDisplayDay: PropTypes.func,
  displayDay: PropTypes.string,
};

export default TimeHeader;
