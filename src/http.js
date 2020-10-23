import axios from "axios";
const http = axios.create({
	baseURL: "http://localhost:3000/cnbeta-api",
	// baseURL: 'http://localhost:3000/blog/api'
	// baseURL: 'http://47.75.177.192:8080/blog/api'
});

export default http;
