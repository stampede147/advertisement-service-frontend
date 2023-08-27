import AxiosFactory from "./configuration/AxiosFactory";


const axios = AxiosFactory.getInstance();

const API_PATHNAME = '/users'

export async function createUser(req){
    return axios.post(API_PATHNAME, req)
        .then(resp => resp.status === 200);
}
export async function getUserByUsername(username){
    return axios.get(`${API_PATHNAME}?username=${username}`)
        .then(resp => resp.data);
}