import axiosFactory from "./configuration/AxiosFactory";


const axios = axiosFactory.getInstance();

const API_PATHNAME = '/api/v1/advertisement-edit'

function getNavigation() {
    return axios.post('${API_PATHNAME}/navigation')
        .then(resp => resp.data)
}