import AxiosFactory from "./configuration/AxiosFactory";

const axios = AxiosFactory.getInstance();


const API_PATHNAME = '/advertisements'


export function getAdvertisementById(advertisementId) {
    return axios.get(API_PATHNAME + "/" + advertisementId)
        .then(resp => resp.data);
}