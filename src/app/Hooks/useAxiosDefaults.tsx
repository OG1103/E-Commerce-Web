import axios from "axios";
import { useEffect } from "react";
import Router from "next/router";

export default function useAxiosDefaults() {
    // Set default Axios configuration
    axios.defaults.baseURL = "http://localhost:5000"; // Fixed API URL
    axios.defaults.withCredentials = true; // Always send cookies with requests

    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401) {
                    Router.push("/signin"); // Redirect unauthorized users
                }
                return Promise.reject(error); // Let the caller handle the error manually
            }
        );

        return () => axios.interceptors.response.eject(interceptor);
    }, []);

    return {};
}
