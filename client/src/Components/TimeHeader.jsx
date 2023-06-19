import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
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
  useEffect(() => {
    handleStartUpTime();
    //eslint-disable-next-line
  }, [date]);
  return (
    <div className="w-78 mt-2 flex flex-row justify-between self-center rounded-lg bg-zinc-700 p-2 text-white">
      <button onClick={handleBackButton}>
        <GoArrowLeft className="self-center text-3xl" />
      </button>
      <div className="flex flex-row text-sm">
        <button
          onClick={handleCreateEvent}
          className="delay-50 ml-1 mr-3 rounded-lg bg-blue-500 p-1.5 text-white transition ease-in-out hover:scale-105 hover:bg-blue-600"
        >
          Neuer Eintrag
        </button>
        <button
          onClick={handleTimeChange}
          className="delay-50 mr-3 rounded-lg bg-blue-500 p-1.5 transition ease-in-out hover:scale-105 hover:bg-blue-600"
        >
          Heute
        </button>
        <input
          className="mr-1 h-8 w-16 w-24 rounded-lg text-center text-black"
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
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
