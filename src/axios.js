import Axios from "axios";

const axios = Axios.create({
    baseURL: process.env.REACT_APP_DB,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axios;
