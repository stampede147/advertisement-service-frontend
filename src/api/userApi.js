import AxiosFactory from "./configuration/AxiosFactory";


const axios = AxiosFactory.getInstance();

const API_PATHNAME = "/user";

export async function getUserDetails(){
    return axios.get(API_PATHNAME)
}