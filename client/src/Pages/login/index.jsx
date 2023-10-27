import Logo from "../../assets/images/bowling-logo.png";
import Axios from "axios";
import MiniLoader from "../../Components/MiniLoader.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
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
    return (
        <>
            <div className="my-10 flex h-4/6 flex-col items-center justify-center">
                <img alt={"logo"} src={Logo} className="mb-5 max-w-sm"/>
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
                            {loginLoading ? <MiniLoader/> : "Login"}
                        </MainButton>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
