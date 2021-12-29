import axios from "axios";
import {config} from "./CnxConstants"
const baseURL =config.API_URL

axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 25000;

export default function setupAxios(axios, store) {
    axios.interceptors.request.use(
        config => {
            const {
                accessToken
            } = store.getState();

            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }

            return config;
        },
        err => Promise.reject(err)
    );
}
