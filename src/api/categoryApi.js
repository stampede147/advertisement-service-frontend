import AxiosFactory from "./configuration/AxiosFactory";


const axios = AxiosFactory.getInstance();
const API_PATH = "/categories"

export function getAll() {
    return axios.get(API_PATH);
}
