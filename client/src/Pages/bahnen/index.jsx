import Axios from "axios";
import SideNotes from "./components/SideNotes.jsx";
import TimeHeader from "./components/TimeHeader.jsx";
import Options from "./components/Options.jsx";
import Info from "./components/Info.jsx";
import Booking from "./components/Booking.jsx";
import MouseHover from "./components/MouseHover.jsx";
import Loading from "../../Components/Loading.jsx";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {checkLaneLoginStatus} from "../../modules/checkLoginStatus.jsx"
import {RiMoneyDollarCircleFill} from "react-icons/ri";
import loadingComplete from "../../modules/loadingComplete.module.jsx";
import {initLaneData, colorArray, time} from "../../modules/bahnenDataProvider.jsx"

const Bahnen = () => {
    const URL = import.meta.env.VITE_REACT_APP_URL;
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    //Options.jsx
    const [changeLaneOne, setChangeLaneOne] = useState(0);
    const [changeLaneTwo, setChangeLaneTwo] = useState(0);
    const [changeStartTime, setChangeStartTime] = useState(0);
    const [changeEndTime, setChangeEndTime] = useState(0);
    const [changeNotes, setChangeNotes] = useState("");

    //Booking.jsx
    const [customerName, setCustomerName] = useState("");
    const [laneOne, setLaneOne] = useState(-1);
    const [laneTwo, setLaneTwo] = useState(-1);
    const [startTime, setStartTime] = useState(-1);
    const [endTime, setEndTime] = useState(-1);
    const [customerNumber, setCustomerNumber] = useState("");
    const [workerName, setWorkerName] = useState("");
    const [notes, setNotes] = useState("");
    const [gridColor, setGridColor] = useState("");
    const [showCreateWindow, setShowCreateWindow] = useState(false);
    const [reverseBookingWarning, setReverseBookingWarning] = useState(false);
    //MouseSettings
    const [mouseEvent, setMouseEvent] = useState(false);
    const [clickCursor, setClickCursor] = useState({x: 0, y: 0});
    //TimeHeader.jsx

    const [displayDay, setDisplayDay] = useState("");
    const [date, setDate] = useState("");
    const timeArray = time(displayDay);
    //Warnings & Success Boxes
    const [missingFields, setMissingField] = useState(false);
    const [overwriteWarning, setOverwriteWarning] = useState(false);
    const [successBooking, setSuccessBooking] = useState(false);
    const [bookingLoading, setBookingLoading] = useState(false);
    const [optionsWindow, setOptionsWindow] = useState(false);
    const [laneFieldIndex, setLaneFieldIndex] = useState({
        itemIndex: 0,
        timeIndex: 0,
    });

    const [laneDataArray, setLaneDataArray] = useState(initLaneData(displayDay));

    //Handles bowling lane requests and arrays
    const resetAndSetLaneData = async () => {
        const response = await Axios.get(`${URL}/portal/${date}`);
        const dataArray = initLaneData(displayDay);
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
                        bahnID: item.id,
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
        loadingComplete([setIsLoading], 1000);
        setLaneDataArray(dataArray);
        setIsLoading(false);
    };

    const laneRequestLoading = () => {
        setSuccessBooking(true);
        setBookingLoading(true);
        loadingComplete([setMissingField, setSuccessBooking, setBookingLoading], 3000);
        resetLaneStates();
        resetAndSetLaneData();
        handleCloseEvent();
    };

    const laneRequestErrorLoading = () => {
        setOverwriteWarning(true);
        loadingComplete([setOverwriteWarning], 3000);
    };

    const reverseBookingLoading = () => {
        setReverseBookingWarning(true);
        loadingComplete([setReverseBookingWarning], 3000);
    };

    const laneEmptyLoading = () => {
        setMissingField(true);
        loadingComplete([setMissingField], 3000);
    };

    const handleLaneRequest = async () => {
        if (
            Number(laneOne) > Number(laneTwo) ||
            Number(startTime) > Number(endTime)
        ) {
            reverseBookingLoading();
        } else if (
            laneOne === -1 ||
            laneTwo === -1 ||
            startTime === -1 ||
            endTime === -1 ||
            customerName === "" ||
            customerNumber === "" ||
            workerName === "" ||
            gridColor === ""
        ) {
            laneEmptyLoading();
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
                if (err) console.log(err);
                if (response.data.message) {
                    setBookingLoading(true);
                    setTimeout(() => {
                        laneRequestLoading();
                    }, 3000)
                } else if (response.data.fehler) {
                    laneRequestErrorLoading();
                }
            });
        }
    };

    //Booking Functions
    const handleCreateEvent = () => {
        setShowCreateWindow(!showCreateWindow);
        colorPicker();
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

    const colorPicker = () => {
        const index = Math.floor(Math.random() * colorArray.length);
        setGridColor(colorArray[index].colorGrid);
    };

    const resetLaneStates = () => {
        setLaneOne(-1);
        setLaneTwo(-1);
        setStartTime(-1);
        setEndTime(-1);
        setCustomerName("");
        setCustomerNumber("");
        setGridColor("");
        setWorkerName("");
    };

    //Options functions
    const [optionsTitle, setOptionsTitle] = useState("");
    const onClickCursorPosition = (event) => {
        const {clientX, clientY} = event;
        const {innerHeight} = window;
        if (clientY < innerHeight - 300) {
            setClickCursor({x: clientX, y: clientY});
        } else {
            setClickCursor({x: clientX, y: clientY - 250});
        }
    };
    const handleOptionsWindow = (itemIndex, timeIndex) => {
        const {customerName, startLane, endLane, startTime, endTime, notes} = laneDataArray[itemIndex].time[timeIndex];
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
    const [hoverPayedStatus, setHoverPayedStatus] = useState();
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});

    const handleMouseEnter = (indexOne, indexTwo) => {
        const {
            customerName,
            workerName,
            customerNumber,
            notes,
            price,
            payedStatus,
        } = laneDataArray[indexOne].time[indexTwo];
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
        const {clientX, clientY} = event;
        const {innerHeight} = window;
        if (clientY < innerHeight - 150) {
            setCursorPosition({x: clientX, y: clientY});
        } else {
            setCursorPosition({x: clientX, y: clientY - 150});
        }
    };
    //Async Fetch Data for resetAndSetLaneData
    const fetchData = async () => {
        setIsLoading(true);
        await resetAndSetLaneData();
    };

    const handleTimeGridClicked = (event, itemIndex, timeIndex) => {
        handleOptionsWindow(itemIndex, timeIndex);
        setLaneFieldIndex({itemIndex: itemIndex, timeIndex: timeIndex});
        onClickCursorPosition(event);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            resetAndSetLaneData();
        }, 3000);
        //checkLaneLoginStatus(navigate);
        fetchData();
        return () => {
            clearInterval(interval);
        };
    }, [date]);

    if (isLoading) {
        return <Loading/>;
    }
    return (
        <div className="flex flex-col h-full md:h-fit items-center justify-center">
            <Info/>
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
            <div
                className="md:mt-2 md:p-8 p-0 md:bg-[#191919] md:shadow-black md:shadow-md rounded flex md:flex-row flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-col bg-gray-800 rounded-md text-white">
                        {timeArray.map((time, index) => {
                            return (
                                <div key={index}
                                     className={`${index === 0 && "text-[8px] bg-gray-600 rounded-tl-lg font-bold text-white"} 
                                     ${index % 4 === 2 && "bg-gray-700"}
                                     ${index % 4 === 1 && "bg-gray-700"}
                                     ${index === 18 && "rounded-bl-lg"}
                                     flex md:h-10 md:w-24 h-6 w-12 border-l border-gray-600 text-xs md:text-base items-center justify-center`}>
                                    {time}
                                </div>
                            )
                        })}
                    </div>
                    {laneDataArray.map((item, itemIndex) => {
                        return (
                            <div key={item.id} className="flex flex-col">
                                <div
                                    key={item.id}
                                    className={`flex md:h-10 md:w-20 h-6 w-5 
                                    ${itemIndex === 11 ? "rounded-tr-lg" : ""} 
                                    ${itemIndex % 4 === 1 ? "bg-gray-800 border-r border-gray-600" : "bg-[#191919]"}
                                    ${itemIndex % 4 === 0 ? "bg-gray-800 border-l border-gray-600" : ""} 
                                    border-t border-gray-600 text-xs md:text-base items-center justify-center text-white`}>
                                    {item.bahn}
                                </div>
                                <div className="flex flex-col">
                                    {item.time?.map((time, timeIndex) => {
                                        return (
                                            <div
                                                key={time.id}
                                                onClick={(event) => handleTimeGridClicked(event, itemIndex, timeIndex)}
                                                onMouseEnter={() => handleMouseEnter(itemIndex, timeIndex)}
                                                onMouseLeave={handleMouseLeave}
                                                onMouseMove={handleMouseMove}
                                                className={`${time.customerName !== "" ? "cursor-pointer" : ""} 
                                                            ${timeIndex % 2 === 1 ? "border-b-2" : ""} 
                                                            ${item.id % 2 === 0 ? "border-r-2" : ""}
                                                            ${time.color === "" ? "bg-gray-200" : time.color} 
                                                            ${itemIndex === 11 && timeIndex === 17 ? "rounded-br-lg" : ""} 
                                                            relative flex md:h-10 md:w-20 h-6 w-5 items-center justify-center border border-black text-xs font-bold`}
                                            >
                                                {(itemIndex === time.firstIndex && timeIndex === time.secondIndex) && (
                                                    <p className="break-all p-1 text-[0px] md:text-base">{time.customerName}</p>
                                                )}
                                                {time.payedStatus && (
                                                    <RiMoneyDollarCircleFill className="absolute right-0 top-0"/>
                                                )}
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
                <SideNotes date={date}/>
            </div>
        </div>
    );
};

export default Bahnen;
