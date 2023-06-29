import Axios from "axios";
import SideNotes from "../Components/SideNotes.jsx";
import TimeHeader from "../Components/TimeHeader.jsx";
import Options from "../Components/Options.jsx";
import Info from "../Components/Info.jsx";
import Booking from "../Components/Booking.jsx";
import MouseHover from "../Components/MouseHover.jsx";
import Loading from "../Components/Loading.jsx";
import { useState, useEffect } from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
const Bahnen = () => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [showCreateWindow, setShowCreateWindow] = useState(false);
  //Options.jsx
  const [changeLaneOne, setChangeLaneOne] = useState(0);
  const [changeLaneTwo, setChangeLaneTwo] = useState(0);
  const [changeStartTime, setChangeStartTime] = useState(0);
  const [changeEndTime, setChangeEndTime] = useState(0);
  const [changeNotes, setChangeNotes] = useState("");

  const [customerName, setCustomerName] = useState("");
  const [laneOne, setLaneOne] = useState(-1);
  const [laneTwo, setLaneTwo] = useState(-1);
  const [startTime, setStartTime] = useState(-1);
  const [endTime, setEndTime] = useState(-1);
  const [customerNumber, setCustomerNumber] = useState("");
  const [workerName, setWorkerName] = useState("");
  const [notes, setNotes] = useState("");
  const [gridColor, setGridColor] = useState("");
  const [colorIndex, setColorIndex] = useState(-1);
  const [displayDay, setDisplayDay] = useState("");
  const [date, setDate] = useState("");
  const [reverseBookingWarning, setReverseBookingWarning] = useState(false);
  const [missingFields, setMissingField] = useState(false);
  const [overwriteWarning, setOverwriteWarning] = useState(false);
  const [successBooking, setSuccessBooking] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [mouseEvent, setMouseEvent] = useState(false);
  const [optionsWindow, setOptionsWindow] = useState(false);
  const [clickCursor, setClickCursor] = useState({ x: 0, y: 0 });
  const [laneFieldIndex, setLaneFieldIndex] = useState({
    itemIndex: 0,
    timeIndex: 0,
  });

  const initLaneData = () => {
    let dataArray = [];
    for (let i = 0; i < 12; i++) {
      let bahn = {
        id: i + 1,
        bahn: (i + 1).toString(),
        time: [],
      };
      for (let j = 0; j < 18; j++) {
        let time = {
          BahnID: 0,
          id: j + 1,
          color: "",
          customerName: "",
          workerName: "",
          customerNumber: "",
          notes: "",
          startLane:0,
          endLane:0,
          startTime:0,
          endTime:0,
          payedStatus: false,
          firstIndex: 0,
          secondIndex: 0,
          price: () => {
            if (displayDay === "Freitag" && time.id >= 11) {
              return 15;
            } else if (displayDay === "Samstag" && time.id >= 9) {
              return 15;
            } else {
              return 13;
            }
          },
        };
        bahn.time.push(time);
      }
      dataArray.push(bahn);
    }
    return dataArray;
  };
  const [laneDataArray, setLanedDataArray] = useState(initLaneData());

  //Handles bowlinglane requests and arrays
  const resetAndSetLaneData = async () => {
    try {
      const response = await Axios.get(`${URL}/portal/${date}`);
      const dataArray = initLaneData();
      response.data.forEach((item) => {
        let price = 0;
        for (let i = item.laneOne; i <= item.laneTwo; i++) {
          for (let j = item.startTime; j <= item.endTime; j++) {
            price += dataArray[i].time[j].price();
          }
        }
        for (let i = item.laneOne; i <= item.laneTwo; i++) {
          for (let j = item.startTime; j <= item.endTime; j++) {
            dataArray[i].time[j] = {
              BahnID: item.id,
              startLane: item.laneOne,
              endLane: item.laneTwo,
              startTime: item.startTime,
              endTime: item.endTime,
              color: item.color,
              customerName: item.customerName,
              customerNumber: item.customerNumber,
              workerName: item.workerName,
              notes: item.customerNotes,
              payedStatus: item.payedStatus === 1,
              price: price,
              firstIndex: i === item.laneOne ? item.laneOne : 0,
              secondIndex: j === item.startTime ? item.startTime : 0,
            };
          }
        }
      });
      setInterval(() => {
        setIsLoading(false);
      }, 5000);
      setLanedDataArray(dataArray);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleLaneRequest = async () => {
    if(Number(laneOne) > Number(laneTwo) || Number(startTime) > Number(endTime)){
      setReverseBookingWarning(true);
      setTimeout(()=>{
        setReverseBookingWarning(false);
      },3000);
    }else if (
      laneOne === -1 || laneTwo === -1 ||
      startTime === -1 || endTime === -1 || 
      customerName === "" || customerNumber === "" ||
      workerName == "" || gridColor === ""
    ) {
      setMissingField(true);
      setTimeout(() => {
        setMissingField(false);
      }, 5000);
    } else {
      await Axios.post(`${URL}/portal`, {
        customerName: customerName,
        laneOne: laneOne,
        laneTwo: laneTwo,
        startTime: startTime,
        endTime: endTime,
        color: gridColor,
        date: date,
        customerNumber: customerNumber,
        workerName: workerName,
        customerNotes: notes,
        payedStatus: false,
      }).then((response, err) => {
        if (err) {
          console.log(err);
        }
        if (response.data.message) {
          setSuccessBooking(true);
          setBookingLoading(true);
          setTimeout(() => {
            resetLaneStates();
            resetAndSetLaneData();
            setMissingField(false);
            setSuccessBooking(false);
            setBookingLoading(false);
            handleCloseEvent();
          }, 2000);
        } else if (response.data.fehler) {
          setOverwriteWarning(true);
          setTimeout(() => {
            setOverwriteWarning(false);
          }, 5000);
        }
      });
    }
  };

  //Booking Functions
  const handleCreateEvent = () => {
    setShowCreateWindow(!showCreateWindow);
    setLaneOne(0);
    setLaneTwo(11);
    setStartTime(0);
    setEndTime(17);
    setOptionsWindow(false);
  };

  const handleCloseEvent = () => {
    setShowCreateWindow(!showCreateWindow);
    setMissingField(false);
    resetLaneStates();
  };

  const colorArray = [
    { colorGrid: "bg-yellow-500" },
    { colorGrid: "bg-lime-500" },
    { colorGrid: "bg-green-500" },
    { colorGrid: "bg-orange-500" },
    { colorGrid: "bg-amber-500" },
    { colorGrid: "bg-teal-500" },
    { colorGrid: "bg-cyan-500" },
    { colorGrid: "bg-red-500" },
    { colorGrid: "bg-violet-500" },
    { colorGrid: "bg-sky-500" },
    { colorGrid: "bg-blue-500" },
    { colorGrid: "bg-indigo-500" },
    { colorGrid: "bg-purple-500" },
    { colorGrid: "bg-fuchsia-500" },
    { colorGrid: "bg-pink-500" },
    { colorGrid: "bg-rose-500" },
  ];

  const resetLaneStates = () => {
    setLaneOne(-1);
    setLaneTwo(-1);
    setStartTime(-1);
    setEndTime(-1);
    setColorIndex(-1);
    setCustomerName("");
    setGridColor("");
    setWorkerName("");
  };

  //Options functions
  const [optionsTitle, setOptionsTitle] = useState("");
  const onClickCursorPosition = (event) => {
    const { clientX, clientY } = event;
    const { innerHeight } = window;
    if (clientY < innerHeight - 300) {
      setClickCursor({ x: clientX, y: clientY });
    } else {
      setClickCursor({ x: clientX, y: clientY - 250 });
    }
  };
  const handleOptionsWindow = (itemIndex, timeIndex) => {
    const { customerName,startLane,endLane,startTime,endTime,notes } = laneDataArray[itemIndex].time[timeIndex];
    setChangeLaneOne(startLane);
    setChangeLaneTwo(endLane);
    setChangeStartTime(startTime);
    setChangeEndTime(endTime);
    setChangeNotes(notes);
    setOptionsTitle(customerName);
    customerName === "" ? setOptionsWindow(false) : setOptionsWindow(true);
    setShowCreateWindow(false);
  };
  const handleCloseOptionsWindow = () => {
    setOptionsWindow(!optionsWindow);
  };

  //MouseHover functions
  const [hoverCustomerName, setHoverCustomerName] = useState("");
  const [hoverWorkerName, setHoverWorkerName] = useState("");
  const [hoverCustomerNumber, setHoverCustomerNumber] = useState("");
  const [hoverNotes, setHoverNotes] = useState("");
  const [hoverPrice, setHoverPrice] = useState(0);
  const [hoverPayedStatus, setHoverPayedStatus] = useState() 
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (indexOne, indexTwo) => {
    const { customerName, workerName, customerNumber, notes, price, payedStatus } =
      laneDataArray[indexOne].time[indexTwo];
    setHoverCustomerName(customerName);
    setHoverWorkerName(workerName);
    setHoverCustomerNumber(customerNumber);
    setHoverNotes(notes);
    setMouseEvent(workerName !== "");
    setHoverPrice(price);
    setHoverPayedStatus(payedStatus);
  };
  const handleMouseLeave = () => {
    setMouseEvent(false);
  };
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerHeight } = window;
    if (clientY < innerHeight - 150) {
      setCursorPosition({ x: clientX, y: clientY });
    } else {
      setCursorPosition({ x: clientX, y: clientY - 150 });
    }
  };
  //Async Fetch Data for resetAndSetLaneData
  const fetchData = async () => {
    setIsLoading(true);
    await resetAndSetLaneData();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      resetAndSetLaneData();
    }, 3000);
    fetchData();
    return () => {
      clearInterval(interval);
    };
    //eslint-disable-next-line
  }, [date]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Info />
      <TimeHeader
        handleCreateEvent={handleCreateEvent}
        setShowCreateWindow={setShowCreateWindow}
        setOptionsWindow={setOptionsWindow}
        resetLaneStates={resetLaneStates}
        setDisplayDay={setDisplayDay}
        displayDay={displayDay}
        date={date}
        setDate={setDate}
      />
      <div className="mt-2 flex flex-row justify-center pb-5">
        <div className="flex flex-col text-white">
          <div className="flex h-10 w-24 items-center justify-center border border-black bg-blue-500 font-bold">
            {displayDay}
          </div>
          <div className="flex h-10 w-24 items-center justify-center border border-r-2 border-black bg-zinc-700">
            16:00
          </div>
          <div className="flex h-10 w-24 items-center justify-center border-b-4 border-r-2 border-black bg-zinc-700">
            16:30
          </div>
          <div className="flex h-10 w-24 items-center justify-center border border-r-2 border-black bg-blue-500">
            17:00
          </div>
          <div className="flex h-10 w-24 items-center justify-center border-b-4 border-r-2 border-black bg-blue-500">
            17:30
          </div>
          <div className="flex h-10 w-24 items-center justify-center border border-r-2 border-black bg-zinc-700">
            18:00
          </div>
          <div className="flex h-10 w-24 items-center justify-center border-b-4 border-r-2 border-black bg-zinc-700">
            18:30
          </div>
          <div className="flex h-10 w-24 items-center justify-center border border-r-2 border-black bg-blue-500">
            19:00
          </div>
          <div className="flex h-10 w-24 items-center justify-center border-b-4 border-r-2 border-black bg-blue-500">
            19:30
          </div>
          <div className="flex h-10 w-24 items-center justify-center border border-r-2 border-black bg-zinc-700">
            20:00
          </div>
          <div className="flex h-10 w-24 items-center justify-center border-b-4 border-r-2 border-black bg-zinc-700">
            20:30
          </div>
          <div className="flex h-10 w-24 items-center justify-center border border-r-2 border-black bg-blue-500">
            21:00
          </div>
          <div className="flex h-10 w-24 items-center justify-center border-b-4 border-r-2 border-black bg-blue-500">
            21:30
          </div>
          <div className="flex h-10 w-24 items-center justify-center border border-r-2 border-black bg-zinc-700">
            22:00
          </div>
          <div className="flex h-10 w-24 items-center justify-center border-b-4 border-r-2 border-black bg-zinc-700">
            22:30
          </div>
          <div className="flex h-10 w-24 items-center justify-center border border-r-2 border-black bg-blue-500">
            23:00
          </div>
          <div className="flex h-10 w-24 items-center justify-center border-b-4 border-r-2 border-black bg-blue-500">
            23:30
          </div>
          <div className="flex h-10 w-24 items-center justify-center border border-r-2 border-black bg-zinc-700">
            00:00
          </div>
          <div className="flex h-10 w-24 items-center justify-center border-b-4 border-r-2 border-black bg-zinc-700">
            00:30
          </div>
        </div>
        <div className="flex flex-row">
          {laneDataArray.map((item, itemIndex) => {
            return (
              <div key={item.id} className="flex flex-col">
                <div
                  key={item.id}
                  className={`${
                    item.id % 2 === 0 ? "border-r-4 border-black" : ""
                  } flex h-10 w-20 items-center justify-center border border-black bg-zinc-700 text-white`}
                >
                  {item.bahn}
                </div>
                <div key={0} className="flex flex-col">
                  {item.time?.map((time, timeIndex) => {
                    return (
                      <div
                        key={time.id}
                        onClick={(event) => {
                          handleOptionsWindow(itemIndex, timeIndex);
                          setLaneFieldIndex({
                            itemIndex: itemIndex,
                            timeIndex: timeIndex,
                          });
                          onClickCursorPosition(event);
                        }}
                        onMouseEnter={() =>
                          handleMouseEnter(itemIndex, timeIndex)
                        }
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        className={`${
                          timeIndex % 2 === 1 ? "border-b-4" : ""
                        } ${item.id % 2 === 0 ? "border-r-4" : ""} ${
                          time.color
                        } relative flex h-10 w-20 cursor-pointer items-center justify-center border border-black text-xs font-bold`}
                      >
                        {itemIndex === time.firstIndex &&
                        timeIndex === time.secondIndex
                          ? time.customerName
                          : null}
                        {time.payedStatus === true ? (
                          <RiMoneyDollarCircleFill className="absolute right-0 top-0" />
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <Booking
          showCreateWindow={showCreateWindow}
          handleCloseEvent={handleCloseEvent}
          setCustomerName={setCustomerName}
          setCustomerNumber={setCustomerNumber}
          setLaneOne={setLaneOne}
          setLaneTwo={setLaneTwo}
          laneOne={laneOne}
          laneTwo={laneTwo}
          startTime={startTime}
          endTime={endTime}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          colorArray={colorArray}
          colorIndex={colorIndex}
          setColorIndex={setColorIndex}
          setGridColor={setGridColor}
          setWorkerName={setWorkerName}
          setNotes={setNotes}
          handleLaneRequest={handleLaneRequest}
          missingFields={missingFields}
          overwriteWarning={overwriteWarning}
          successBooking={successBooking}
          bookingLoading={bookingLoading}
        />
        <Options
          date={date}
          optionsWindow={optionsWindow}
          setLanedDataArray={setLanedDataArray}
          laneDataArray={laneDataArray}
          laneFieldIndex={laneFieldIndex}
          clickCursor={clickCursor}
          handleCloseOptionsWindow={handleCloseOptionsWindow}
          resetAndSetLaneData={resetAndSetLaneData}
          optionsTitle={optionsTitle}
          changeLaneOne={changeLaneOne}
          changeLaneTwo={changeLaneTwo}
          changeStartTime={changeStartTime}
          changeEndTime={changeEndTime}
          setChangeLaneOne={setChangeLaneOne}
          setChangeLaneTwo={setChangeLaneTwo}
          setChangeStartTime={setChangeStartTime}
          setChangeEndTime={setChangeEndTime}
          reverseBookingWarning={reverseBookingWarning}
          setReverseBookingWarning={setReverseBookingWarning}
          changeNotes={changeNotes}
          setChangeNotes={setChangeNotes}
        />
        <MouseHover
          mouseEvent={mouseEvent}
          cursorPosition={cursorPosition}
          hoverCustomerName={hoverCustomerName}
          hoverCustomerNumber={hoverCustomerNumber}
          hoverWorkerName={hoverWorkerName}
          hoverNotes={hoverNotes}
          hoverPrice={hoverPrice}
          hoverPayedStatus={hoverPayedStatus}
        />
        <SideNotes date={date} />
      </div>
    </>
  );
};

export default Bahnen;
