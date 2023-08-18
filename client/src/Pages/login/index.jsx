import Logo from "../../assets/images/bowling-logo.png";
import Axios from "axios";
import MiniLoader from "../../Components/MiniLoader.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MainButton from "../../Components/MainButton";

const Login = () => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const loginComplete = () => {
    setLoginLoading(true);
    setTimeout(() => {
      setLoginLoading(false);
      navigate("/Portal");
    }, 3000);
  };

  const handleLogin = async () => {
    const response = await Axios.post(`${URL}/login`, {
      userName: userName,
      userPassword: userPassword,
    });
    if (response.data.message) {
      setLoginStatus(response.data.message);
    } else {
      loginComplete();
    }
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
    response.data.loggedIn ? navigate("/portal") : navigate("/login");
  };

  useEffect(() => {
    checkLoggingStatus();
  }, []);

  return (
    <>
      <div className="my-10 flex h-4/6 flex-col items-center justify-center">
        <img src={Logo} className="mb-5 max-w-sm" />
        <form onSubmit={handleLogin}>
          <div className="bg-dark flex flex-col">
            <input
              id="user-name"
              className="mb-1 h-14 rounded border p-1 outline-0"
              placeholder="Name"
              type="name"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              id="user-password"
              className="h-14 rounded border p-1 outline-0"
              placeholder="Passwort"
              type="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <p className="p-1 text-red-700">{loginStatus}</p>
            <MainButton
              color="bg-blue-700 hover:bg-blue-800"
              disabled={loginLoading}
              type="submit"
            >
              {loginLoading ? <MiniLoader /> : "Login"}
            </MainButton>
          </div>
        </form>
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
    </>
  );
};

export default Login;
