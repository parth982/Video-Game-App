import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "2da8a29fb48745968e5e59fcc424da5e"
    }
});


