import axios from "axios";

const KEY = "AIzaSyCyHkbjbUxLj5UlkhOP1pY1yn_lrZewGD8";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		type: "video",
		key: KEY,
	},
});
