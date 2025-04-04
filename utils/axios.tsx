import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REST_API_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, //백엔드 서버에 session 쿠키를 보내기 위해 설정
});

export default axiosInstance;