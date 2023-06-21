import Button from "../Components/Button.jsx";
import Logo from "../Img/bowling-logo.png";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post(`${URL}/login`, {
      userName: userName,
      userPassword: userPassword,
    }).then((response) => {
      response.data.message
        ? setLoginStatus(response.data.message)
        : navigate("/Portal");
    });
  };

  const register = () => {
    Axios.post(`${URL}/register`,{
      userName: userName,
      userPassword: userPassword,
    })};

  useEffect(() => {
    Axios.get (`${URL}/login`).then((response) => {
      if(response.data.loggedIn === true) {
        navigate("/Portal");
      } else {
        navigate("/Login");
      }
    });
    //eslint-disable-next-line
  }, [navigate]);

  return (
    <>
      <div className="flex flex-col justify-center items-center my-10">
        <img src={Logo} className="max-w-sm mb-5" />
        <div className="bg-dark flex flex-col">
          <input
            name="loginName"
            type={"text"}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Name"
            className="bg-stone-200 rounded-lg border border-black p-1 block mb-1"
          ></input>
          <input
            name="loginPassword"
            type={"password"}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            placeholder="Passwort"
            className="bg-stone-200 rounded-lg border border-black p-1 block mb-2"
          ></input>
          <Button
            onClick={login}
            className={
              "transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-101 hover:bg-blue-500 bg-blue-700 text-white p-1 rounded-lg"
            }
          >
            Login
          </Button>
          <Button
            onClick={register}
            className={
              "mt-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-101 hover:bg-blue-500 bg-blue-700 text-white p-1 rounded-lg"
            }
          >
            Registrieren
          </Button>
          <div className="text-red-700 p-1 mt-2">{loginStatus}</div>
        </div>
      </div>
    </>
  );
};

export default Login;
