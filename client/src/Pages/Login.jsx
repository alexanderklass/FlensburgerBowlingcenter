import Logo from "../Img/bowling-logo.png";
import Axios from "axios";
import MiniLoader from "../Components/MiniLoader.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Textfield from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import LoginIcon from '@mui/icons-material/Login';


const Login = () => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const handleCheckBoxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleRememberMeOnStart = () => {
    const rememberMeValue = localStorage.getItem("rememberMe") === "true";
    setRememberMe(rememberMeValue);
    if (rememberMeValue) {
      setUserName(localStorage.getItem("username") || "");
      setUserPassword(localStorage.getItem("password") || "");
    }
  };

  const handleLocalStorageValues = () => {
    if (rememberMe) {
      localStorage.setItem("username", userName);
      localStorage.setItem("password", userPassword);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
    localStorage.setItem("rememberMe", rememberMe.toString());
  };

  const login = () => {
    Axios.post(`${URL}/login`, {
      userName: userName,
      userPassword: userPassword,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else if (response.data.successLogin) {
        handleLocalStorageValues();
        setLoginLoading(true);
        setTimeout(() => {
          setLoginLoading(false);
          navigate("/Portal/Bahnen");
        }, 3000);
      }
    });
  };

  /*
  const register = () => {
    Axios.post(`${URL}/register`,{
      userName: userName,
      userPassword: userPassword,
    })};
  */

  const checkLoggingStatus = async () => {
    const response = await Axios.get(`${URL}/login`);
    if (response.data.loggedIn === true) {
      navigate("/Portal/Bahnen");
    } else {
      navigate("/Login");
    }
  };

  useEffect(() => {
    handleRememberMeOnStart();
    checkLoggingStatus();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="my-10 flex flex-col items-center justify-center">
        <img src={Logo} className="mb-5 max-w-sm" />
        <div className="bg-dark flex flex-col">
          <Textfield
            id="UserName"
            sx={{ marginBottom: 1 }}
            label="Name"
            variant="filled"
            className="bg-white"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Textfield
            id="Password"
            label="Passwort"
            variant="filled"
            type="password"
            className="bg-white"
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <label className="mt-1 flex items-center">
            <Checkbox checked={rememberMe} onChange={handleCheckBoxChange} />
            Daten merken
          </label>
          <div className="p-1 text-red-700">{loginStatus}</div>
          <Button 
            onClick={login} 
            disabled={loginLoading}
            variant="contained"
            endIcon={<LoginIcon/>}>
            {loginLoading ? <MiniLoader /> : "Login"}
          </Button>
          {/*
          <button
            onClick={register}
            className={
              "mt-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-101 hover:bg-blue-500 bg-blue-700 text-white p-1 rounded-lg"
            }
          >
            Registrieren
          </button>
          */}
        </div>
      </div>
    </>
  );
};

export default Login;
