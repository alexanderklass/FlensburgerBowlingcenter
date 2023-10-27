import Axios from "axios";
const URL = import.meta.env.VITE_REACT_APP_URL;
export const checkLoginStatus = async (navigate) => {
    const response = await Axios.get(`${URL}/login`);
    response.data.loggedIn ? navigate("/portal") : navigate("/login");
};

export const checkLaneLoginStatus = async (navigate) => {
    const response = await Axios.get(`${URL}/login`);
    response.data.loggedIn ? navigate("/bahnen") : navigate("/login");
}

