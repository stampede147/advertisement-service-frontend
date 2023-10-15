import AxiosFactory from "./configuration/AxiosFactory";
import {createSearchParams} from "react-router-dom";

const axios = AxiosFactory.getInstance();


const API_PATHNAME = '/advertisements'


export function getAdvertisementById(advertisementId) {
    return axios.get(API_PATHNAME + "/" + advertisementId)
        .then(resp => resp.data);
}

export function getAdvertisementPageByTitle(title, pagination) {

    let titleParams = "?title=".concat(title);

    const paginationParams = pagination ?
        "&".concat(createSearchParams(pagination))
        : "";

    return axios.get(API_PATHNAME.concat(titleParams).concat(paginationParams))
        .then(resp => resp.data);
}



