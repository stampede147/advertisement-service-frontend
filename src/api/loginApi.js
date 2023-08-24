import AxiosFactory from "./configuration/AxiosFactory";


const API_PATHNAME = '/authentications/jwt'
const axios = AxiosFactory.getInstance();

async function login(body) {

    return axios.post(API_PATHNAME, body)
        .then(response => {
            return response.status > 200
                && response.status < 400;
        })
        .catch(error => {
            console.log(error)
            return false
        })
}

export default login;