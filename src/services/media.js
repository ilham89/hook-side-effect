import axiosInstance from "../config/axiosInstance";

export const getMedia = async () => {
	await axiosInstance
		.get(`/api/games`, {
			params: {
				page: 1,
			},
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const searchMedia = async (params) => {
	await axiosInstance
		.get(`/api/search`, {
			params: params,
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
};
