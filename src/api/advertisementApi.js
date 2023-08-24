import AxiosFactory from "./configuration/AxiosFactory";

const axios = AxiosFactory.getInstance();

const API_PATHNAME = '/advertisements'

export function create(request) {

    return axios.post(API_PATHNAME, request)
        .then(resp => resp.data);
}

export function deleteById(advertisementId) {
    return axios.delete(`${API_PATHNAME}/${advertisementId}`);
}

export function getPage(userId, page = 0) {
    return axios.get(`${API_PATHNAME}?userId=${userId}&page=${page}`)
        .then(resp => resp.data);
}

export function getOne(advertisementId) {
    return axios.get(`${API_PATHNAME}/${advertisementId}`)
        .then(resp => resp.data);
}