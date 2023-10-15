import AxiosFactory from "./configuration/AxiosFactory";


const axios = AxiosFactory.getInstance();

const API_PATHNAME = "/users";

export async function createUser(body){
    return axios.post(API_PATHNAME, body)
        .then(resp => resp.status === 201);
}