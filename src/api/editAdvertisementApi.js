import axiosFactory from "./configuration/AxiosFactory";


const axios = axiosFactory.getInstance();

const API_PATHNAME = '/layouts/advertisement-edit'

// export function getNavigation() {
//     return axios.post(API_PATHNAME.concat("/navigation"))
//         .then(resp => resp.data)
// }
//
// export function getLayout(body){
//     return axios.post(API_PATHNAME.concat("/generate"), body)
//         .then(resp => resp.data)
// }
