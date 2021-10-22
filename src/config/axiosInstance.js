import Axios from "axios";

const axiosInstance = Axios.create({
	baseURL: "https://the-lazy-media-api.vercel.app",
});

export default axiosInstance;
