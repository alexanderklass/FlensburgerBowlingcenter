import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import Axios from "axios";
import MiniLoader from "./MiniLoader";
import SaveIcon from "@mui/icons-material/Save";
import RefreshIcon from "@mui/icons-material/Refresh";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const SideNotes = ({ date }) => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const [cookingNotesField, setCookingNotesField] = useState("");
  const [clubRoomNotesField, setClubRoomNotesField] = useState("");
  const [extraNotes, setExtraNotes] = useState("");
  const [extraLoading, setExtraLoading] = useState(false);
  const [cookingLoading, setCookingLoading] = useState(false);
  const [clubRoomLoading, setClubRoomLoading] = useState(false);
  const [extraRefreshLoading, setExtraRefreshLoading] = useState(false);
  const [cookingRefreshLoading, setCookingRefreshLoading] = useState(false);
  const [clubRoomRefreshLoading, setClubRoomRefreshLoading] = useState(false);
  const [spareExtraData, setSpareExtraData] = useState("");
  const [spareCookingData, setSpareCookingData] = useState("");
  const [spareClubRoomgData, setSpareClubRoomData] = useState("");
  const [extraNotSaved, setExtraNotSaved] = useState(false);
  const [cookingNotSaved, setCookingNotSaved] = useState(false);
  const [clubRoomNotSaved, setClubRoomNotSaved] = useState(false);

  const fetchCookingData = async () => {
    try {
      const response = await Axios.get(`${URL}/cookingNotes/${date}`);
      setCookingRefreshLoading(true);
      if (response) {
        response.data.forEach((item) => {
          setCookingNotesField(item.cookingNotes);
          setSpareCookingData(cookingNotesField);
        });
        setTimeout(() => {
          setCookingRefreshLoading(false);
          setCookingNotSaved(false);
        }, 3000);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        //
      }
    }
  };

  const fetchClupRoomData = async () => {
    try {
      const response = await Axios.get(`${URL}/clubRoomNotes/${date}`);
      setClubRoomRefreshLoading(true);
      if (response) {
        response.data.forEach((item) => {
          setClubRoomNotesField(item.clubRoomNotes);
          setSpareClubRoomData(clubRoomNotesField);
        });
        setTimeout(() => {
          setClubRoomRefreshLoading(false);
          setClubRoomNotSaved(false);
        }, 3000);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        //
      }
    }
  };

  const fetchExtraData = async () => {
    try {
      const response = await Axios.get(`${URL}/extraNotes/${date}`);
      setExtraRefreshLoading(true);
      if (response) {
        response.data.forEach((item) => {
          setExtraNotes(item.extraNotes);
          setSpareExtraData(extraNotes);
        });
        setTimeout(() => {
          setExtraRefreshLoading(false);
          setExtraNotSaved(false);
        }, 3000);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        //
      }
    }
  };

  const handleExtraChanged = (event) => {
    setExtraNotes(event.target.value);
    extraNotes === spareExtraData
      ? setExtraNotSaved(false)
      : setExtraNotSaved(true);
  };

  const handleCookingChanged = (event) => {
    setCookingNotesField(event.target.value);
    cookingNotesField === spareCookingData
      ? setCookingNotSaved(false)
      : setCookingNotSaved(true);
  };

  const handleClubRoomChanged = (event) => {
    setClubRoomNotesField(event.target.value);
    clubRoomNotesField === spareClubRoomgData
      ? setClubRoomNotSaved(false)
      : setClubRoomNotSaved(true);
  };

  const handleClupRoomNoteField = async () => {
    await Axios.post(`${URL}/clubRoomNotes`, {
      clubRoomNotesField: clubRoomNotesField,
      date: date,
    }).then((response, err) => {
      if (err) {
        console.log(err);
      } else if (response.data.success) {
        setClubRoomNotSaved(false);
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
        setCookingNotSaved(false);
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
        setExtraNotSaved(false);
        setExtraLoading(true);
        setTimeout(() => {
          setExtraLoading(false);
        }, 2000);
      }
    });
  };
  const resetNotes = () => {
    setCookingNotesField("");
    setClubRoomNotesField("");
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
      <div className="mb-3 flex flex-col">
        <TextField
          id="extraNotes"
          multiline
          rows={7}
          label="Sonderbuchungen..."
          className={`${extraNotes === "" ? "" : "bg-yellow-500"} bg-white`}
          value={extraNotes}
          onChange={handleExtraChanged}
          InputLabelProps={{
            shrink: true,
            style: { fontSize: 18 },
          }}
        />
        {extraNotSaved && (
          <p className="text-red-500">Ungespeicherter Wert vorhanden!</p>
        )}
        <div className="mb-3 mt-2 flex flex-row items-center">
          <Button
            sx={{ marginRight: 1 }}
            onClick={handleExtraNoteField}
            disabled={extraLoading}
            variant="contained"
            size="small"
            startIcon={<SaveIcon />}
          >
            {extraLoading ? <MiniLoader /> : "Speichern"}
          </Button>
          <Button
            onClick={fetchExtraData}
            disabled={extraRefreshLoading}
            variant="contained"
            size="small"
            startIcon={<RefreshIcon />}
            color="success"
          >
            {extraRefreshLoading ? <MiniLoader /> : "Aktualisieren"}
          </Button>
        </div>
      </div>
      <div className="mb-3 flex flex-col">
        <TextField
          id="cookingNotes"
          multiline
          rows={7}
          label="Notizen Koch..."
          className="bg-white"
          value={cookingNotesField}
          onChange={handleCookingChanged}
          InputLabelProps={{
            shrink: true,
            style: { fontSize: 18 },
          }}
        />
        {cookingNotSaved && (
          <p className="text-red-500">Ungespeicherter Wert vorhanden!</p>
        )}
        <div className="mt-2 flex flex-row">
          <Button
            sx={{ marginRight: 1 }}
            onClick={handleCookingNoteField}
            disabled={cookingLoading}
            variant="contained"
            size="small"
            startIcon={<SaveIcon />}
          >
            {cookingLoading ? <MiniLoader /> : "Speichern"}
          </Button>
          <Button
            onClick={fetchCookingData}
            disabled={cookingRefreshLoading}
            variant="contained"
            size="small"
            startIcon={<RefreshIcon />}
            color="success"
          >
            {cookingRefreshLoading ? <MiniLoader /> : "Aktualisieren"}
          </Button>
        </div>
      </div>
      <div className="mt-3 flex flex-col">
        <TextField
          id="clubRoomNotes"
          multiline
          rows={7}
          className="w-96 bg-white"
          label="Notizen Clubraum..."
          value={clubRoomNotesField}
          onChange={handleClubRoomChanged}
          InputLabelProps={{
            shrink: true,
            style: { fontSize: 18 },
          }}
        />
        {clubRoomNotSaved && (
          <p className="text-red-500">Ungespeicherter Werte vorhanden!</p>
        )}
        <div className="mt-2 flex flex-row">
          <Button
            sx={{ marginRight: 1 }}
            onClick={handleClupRoomNoteField}
            disabled={clubRoomLoading}
            variant="contained"
            size="small"
            startIcon={<SaveIcon />}
          >
            {clubRoomLoading ? <MiniLoader /> : "Speichern"}
          </Button>
          <Button
            onClick={fetchClupRoomData}
            disabled={clubRoomRefreshLoading}
            variant="contained"
            size="small"
            startIcon={<RefreshIcon />}
            color="success"
          >
            {clubRoomRefreshLoading ? <MiniLoader /> : "Aktualisieren"}
          </Button>
        </div>
      </div>
    </div>
  );
};

SideNotes.propTypes = {
  date: PropTypes.string,
};

export default SideNotes;
