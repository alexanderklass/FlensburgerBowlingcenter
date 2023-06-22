import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import Axios from "axios";
import MiniLoader from "./MiniLoader";

const SideNotes = ({ date }) => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const [cookingNotesField, setCookingNotesField] = useState("");
  const [clupRoomNotesField, setClupRoomNotesField] = useState("");
  const [extraNotes, setExtraNotes] = useState("");
  const [extraLoading, setExtraLoading] = useState(false);
  const [cookingLoading, setCookingLoading] = useState(false);
  const [clubRoomLoading, setClubRoomLoading] = useState(false);

  const fetchCookingData = async () => {
    try {
      const response = await Axios.get(`${URL}/cookingNotes/${date}`);
      response.data.forEach((item) => {
        setCookingNotesField(item.cookingNotes);
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("Ressource nicht gefunden");
      }
    }
  };

  const fetchClupRoomData = async () => {
    try {
      const response = await Axios.get(`${URL}/clubRoomNotes/${date}`);
      response.data.forEach((item) => {
        setClupRoomNotesField(item.clubRoomNotes);
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("Ressource nicht gefunden");
      }
    }
  };

  const fetchExtraData = async () => {
    try {
      const response = await Axios.get(`${URL}/extraNotes/${date}`);
      response.data.forEach((item) => {
        setExtraNotes(item.extraNotes);
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("Ressource nicht gefunden");
      }
    }
  };

  const handleClupRoomNoteField = async () => {
    await Axios.post(`${URL}/clubRoomNotes`, {
      clubRoomNotesField: clupRoomNotesField,
      date: date,
    }).then((response, err) => {
      if (err) {
        console.log(err);
      } else if (response.data.success) {
        setClubRoomLoading(true);
        setTimeout(() => {
          setClubRoomLoading(false);
        }, 2000);
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
        setCookingLoading(true);
        setTimeout(() => {
          setCookingLoading(false);
        }, 2000);
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
        setExtraLoading(true);
        setTimeout(() => {
          setExtraLoading(false);
        }, 2000);
      }
    });
  };
  const resetNotes = () => {
    setCookingNotesField("");
    setClupRoomNotesField("");
    setExtraNotes("");
  };
  const fetchAllNotes = () => {
    fetchCookingData();
    fetchClupRoomData();
    fetchExtraData();
  };

  useEffect(() => {
    resetNotes();
    fetchAllNotes();
    //eslint-disable-next-line
  }, [date]);

  return (
    <div className="ml-3 flex flex-col">
      <label className="font-bold">Sonderbuchungen</label>
      <textarea
        name="ExtraNotes"
        className="mb-2 rounded-lg border-2 border-black bg-yellow-500 p-1"
        onChange={(e) => setExtraNotes(e.target.value)}
        rows={7}
        cols={50}
        value={extraNotes}
      />
      <button
        onClick={handleExtraNoteField}
        disabled={extraLoading}
        className="disabled:bg-gray-500 delay-50 mb-4 ml-2 h-8 w-24 rounded-lg bg-blue-500 text-white transition ease-in-out hover:scale-105 hover:bg-blue-600"
      >
        {extraLoading ? <MiniLoader/> : "Speichern"}
      </button>
      <label className="font-bold">Koch</label>
      <textarea
        name="CookNotes"
        className="mb-2 rounded-lg border-2 border-black p-1"
        placeholder="Notizen Koch..."
        onChange={(e) => setCookingNotesField(e.target.value)}
        rows={7}
        cols={50}
        value={cookingNotesField}
      />
      <button
        disabled={cookingLoading}
        className="disabled:bg-gray-500 delay-50 mb-4 ml-2 h-8 w-24 rounded-lg bg-blue-500 text-white transition ease-in-out hover:scale-105 hover:bg-blue-600"
        onClick={handleCookingNoteField}
      >
        {cookingLoading ? <MiniLoader/> : "Speichern"}
      </button>
      <label className="font-bold">Clubraum</label>
      <textarea
        name="ClubRoomNotes"
        className="mb-2 rounded-lg border-2 border-black p-1"
        placeholder="Notizen Clubraum..."
        onChange={(e) => setClupRoomNotesField(e.target.value)}
        rows={7}
        cols={50}
        value={clupRoomNotesField}
      />
      <button
        disabled={clubRoomLoading}
        className="disabled:bg-gray-500 delay-50 mb-4 ml-2 h-8 w-24 rounded-lg bg-blue-500 text-white transition ease-in-out hover:scale-105 hover:bg-blue-600"
        onClick={handleClupRoomNoteField}
      >
        {clubRoomLoading ? <MiniLoader/> : "Speichern"}
      </button>
    </div>
  );
};

SideNotes.propTypes = {
  date: PropTypes.string,
};

export default SideNotes;
