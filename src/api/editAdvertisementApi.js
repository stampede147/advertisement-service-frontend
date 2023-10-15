import axiosFactory from "./configuration/AxiosFactory";
import {useCallback} from "react";


const axios = axiosFactory.getInstance();

const API_PATHNAME = '/layouts/advertisement-edit'

export function getNavigation() {
    return axios.post(API_PATHNAME.concat("/navigation"))
        .then(resp => resp.data)
}

export function getLayout(navigation){
    return axios.post(API_PATHNAME.concat("/generate"), navigation)
        .then(resp => resp.data)
}
