import axios from "axios";

const cancelConfig: any = {
	request: null,
	cancelToken: null,
};

async function axiosGetCancellable(url: string, config?: {}) {
	if (cancelConfig.request) {
		cancelConfig.request.cancel("canceled");
	}

	cancelConfig.request = axios.CancelToken.source();
	cancelConfig.cancelToken = cancelConfig.request.token;
	Object.assign(cancelConfig, config); // merge cancelConfig with config

	try {
		const res = await axios.get(url, cancelConfig);
		return res;
	} catch (error: any) {
		if (error.message !== "canceled") {
			throw error;
		}
	}
}

export { axiosGetCancellable };
