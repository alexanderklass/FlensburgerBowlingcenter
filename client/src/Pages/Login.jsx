import Logo from "../Img/bowling-logo.png";
import Axios from "axios";
import MiniLoader from "../Components/MiniLoader.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post(`${URL}/login`, {
      userName: userName,
      userPassword: userPassword,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else if (response.data.successLogin) {
        setLoginLoading(true);
        setTimeout(()=>{
          setLoginLoading(false);
          //navigate("/Portal");
        },3000)
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
      navigate("/Portal");
    } else {
      navigate("/Login");
    }
  };
  useEffect(() => {
    //checkLoggingStatus();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="my-10 flex flex-col items-center justify-center">
        <img src={Logo} className="mb-5 max-w-sm" />
        <div className="bg-dark flex flex-col">
          <input
            name="loginName"
            type={"text"}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Name"
            className="mb-1 block rounded-lg border border-black bg-stone-200 p-1"
          ></input>
          <input
            name="loginPassword"
            type={"password"}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            placeholder="Passwort"
            className="rounded-lg border border-black bg-stone-200 p-1"
          ></input>
          <div className="p-1 text-red-700">{loginStatus}</div>
          <button
            onClick={login}
            disabled={loginLoading}
            className={
              "delay-50 hover:scale-101 rounded-lg bg-blue-700 p-1 text-white transition ease-in-out hover:-translate-y-1 hover:bg-blue-500 disabled:bg-gray-500"
            }
          >
            {loginLoading ? <MiniLoader /> : "Login"}
          </button>
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
