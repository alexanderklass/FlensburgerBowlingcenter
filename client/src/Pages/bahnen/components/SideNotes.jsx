import {PropTypes} from "prop-types";
import {useState, useEffect} from "react";
import {AiOutlineWarning} from "react-icons/ai";
import Axios from "axios";
import MiniLoader from "../../../Components/MiniLoader";
import {MdSave, MdRefresh} from "react-icons/md";
import MainButton from "../../../Components/MainButton";

const SideNotes = ({date}) => {
    const URL = import.meta.env.VITE_REACT_APP_URL;
    const [cookingNotesField, setCookingNotesField] = useState("");
    const [clubRoomNotesField, setClubRoomNotesField] = useState("");
    const [extraNotes, setExtraNotes] = useState("");
    const [spareExtraData, setSpareExtraData] = useState("");
    const [spareCookingData, setSpareCookingData] = useState("");
    const [spareClubRoomgData, setSpareClubRoomData] = useState("");
    const [notSavedWarnings, setNotSavedWarnings] = useState(false);
    const [notesLoading, setNotesLoading] = useState(false);
    const [notesRefreshLoading, setNotesRefreshLoading] = useState(false);

    const fetchCookingData = async () => {
        try {
            const response = await Axios.get(`${URL}/cookingNotes/${date}`);
            if (response) {
                response.data.forEach((item) => {
                    setCookingNotesField(item.cookingNotes);
                    setSpareCookingData(cookingNotesField);
                });
            }
        } catch (err) {
            if (err) {
                //
            }
        }
    };

    const fetchClupRoomData = async () => {
        try {
            const response = await Axios.get(`${URL}/clubRoomNotes/${date}`);
            if (response) {
                response.data.forEach((item) => {
                    setClubRoomNotesField(item.clubRoomNotes);
                    setSpareClubRoomData(clubRoomNotesField);
                });
            }
        } catch (err) {
            if (err) {
                //
            }
        }
    };

    const fetchExtraData = async () => {
        try {
            const response = await Axios.get(`${URL}/extraNotes/${date}`);
            if (response) {
                response.data.forEach((item) => {
                    setExtraNotes(item.extraNotes);
                    setSpareExtraData(extraNotes);
                });
            }
        } catch (err) {
            if (err) {
                //
            }
        }
    };

    const handlExtraChanged = (event) => {
        setExtraNotes(event.target.value);
        extraNotes === spareExtraData
            ? setNotSavedWarnings(false)
            : setNotSavedWarnings(true);
    };

    const handleCookingChanged = (event) => {
        setCookingNotesField(event.target.value);
        cookingNotesField === spareCookingData
            ? setNotSavedWarnings(false)
            : setNotSavedWarnings(true);
    };

    const handleClubChanged = (event) => {
        setClubRoomNotesField(event.target.value);
        clubRoomNotesField === spareClubRoomgData
            ? setNotSavedWarnings(false)
            : setNotSavedWarnings(true);
    };

    const handleClupRoomNoteField = async () => {
        await Axios.post(`${URL}/clubRoomNotes`, {
            clubRoomNotesField: clubRoomNotesField,
            date: date,
        }).then((response, err) => {
            if (err) {
                console.log(err);
            } else if (response.data.success) {
                //
            }
        });
    };

    const handleCookingNoteField = async () => {
        await Axios.post(`${URL}/cookingNotes`, {
            cookingNotesField: cookingNotesField,
            date: date,
        }).then((response, err) => {
            if (err) {
                console.log(err);
            } else if (response.data.success) {
                //
            }
        });
    };

    const handleExtraNoteField = async () => {
        await Axios.post(`${URL}/extraNotes`, {
            extraNotes: extraNotes,
            date: date,
        }).then((response, err) => {
            if (err) {
                console.log(err);
            } else if (response.data.success) {
                //
            }
        });
    };
    const resetNotes = () => {
        setCookingNotesField("");
        setClubRoomNotesField("");
        setExtraNotes("");
    };

    const saveAllNotes = () => {
        setNotesLoading(true);
        setTimeout(() => {
            handleExtraNoteField();
            handleCookingNoteField();
            handleClupRoomNoteField();
            setNotesLoading(false);
            setNotSavedWarnings(false);
        }, 1000);
    };
    const fetchAllNotes = () => {
        setNotesRefreshLoading(true);
        setTimeout(() => {
            fetchExtraData();
            fetchCookingData();
            fetchClupRoomData();
            setNotesRefreshLoading(false);
            setNotSavedWarnings(false);
        }, 1000);
    };

    useEffect(() => {
        resetNotes();
        fetchAllNotes();
        //eslint-disable-next-line
    }, [date]);

    return (
        <div className="ml-3 mt-2 flex flex-col gap-5 items-center">
            <p class={"text-xl md:flex hidden bg-gray-200 rounded-md font-bold p-2 w-72 justify-center"}>Notizenfelder</p>
            <div className="flex flex-col">
                <textarea
                    id="extra-notes"
                    rows={7}
                    placeholder="Sonderbuchungen..."
                    className={`${
                        extraNotes === "" ? "bg-gray-300" : "bg-yellow-500"
                    } w-72 rounded border bg-white p-3 placeholder:text-gray-600 outline-0`}
                    value={extraNotes}
                    onChange={handlExtraChanged}
                />
            </div>
            <div className="flex flex-col">
                <textarea
                    id="cooking-notes"
                    className="w-72 rounded border bg-gray-300 placeholder:text-gray-600 p-3 outline-0"
                    placeholder="Notizen Koch..."
                    rows={7}
                    value={cookingNotesField}
                    onChange={handleCookingChanged}
                />
            </div>
            <div className="flex flex-col gap-1">
                <textarea
                    id="club-notes"
                    className="w-72 rounded border bg-gray-300 placeholder:text-gray-600 p-3 outline-0"
                    placeholder="Notizen Clubraum..."
                    rows={7}
                    value={clubRoomNotesField}
                    onChange={handleClubChanged}
                />
                {notSavedWarnings && (
                    <div className="text-white bg-red-600 mt-1 rounded flex flex-row justify-center items-center">
                        <AiOutlineWarning className={"mr-1"}/>
                        <p>Ungespeicherte Werte vorhanden!</p>
                    </div>
                )}
                <div className="flex flex-row">
                    <MainButton
                        color={"bg-blue-600 hover:bg-blue-700"}
                        onClick={saveAllNotes}
                        disabled={notesLoading}
                    >
                        <MdSave className="mr-1 text-xl"/>
                        {notesLoading ? <MiniLoader/> : "SPEICHERN"}
                    </MainButton>
                    <MainButton
                        color={"bg-green-700 hover:bg-green-800"}
                        onClick={fetchAllNotes}
                        disabled={notesRefreshLoading}
                    >
                        <MdRefresh className="mr-1 text-xl"/>
                        {notesRefreshLoading ? <MiniLoader/> : "AKTUALISIEREN"}
                    </MainButton>
                </div>
            </div>
        </div>
    );
};

SideNotes.propTypes = {
    date: PropTypes.string,
};

export default SideNotes;
