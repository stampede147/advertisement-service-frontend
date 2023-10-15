import AxiosFactory from "./configuration/AxiosFactory";

const axios = AxiosFactory.getInstance();

const API_PATHNAME = '/user/advertisements'

export function create(requestBody) {

    return axios.post(API_PATHNAME, requestBody)
        .then(resp => resp.data);
}

export function deleteById(advertisementId) {
    return axios.delete(`${API_PATHNAME}/${advertisementId}`);
}

export function getAdvertisementsPage(page = 0) {
    return axios.get(`${API_PATHNAME}?page=${page}`)
        .then(resp => resp.data);
}

export function getOne(advertisementId) {
    return axios.get(`${API_PATHNAME}/${advertisementId}`)
        .then(resp => resp.data);
}

export function postViewedAdvertisements() {
    return axios.post(`${API_PATHNAME}/viewed`)
        .then(resp => resp.data);
}
