import AxiosFactory from "./configuration/AxiosFactory";


const axios = AxiosFactory.getInstance();

const API_PATH = "/images"

export function saveImage(binaryImage) {
    const headers = {
        "Content-Type": "multipart/form-data"
    }

    return axios.post(API_PATH, binaryImage, {"headers": headers})
        .then(resp => resp.data)
}