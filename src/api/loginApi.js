import AxiosFactory from "./configuration/AxiosFactory";


const API_URL = 'http://localhost:8080/api/v1/authentications/jwt'

async function loginApi(body) {


    let axios = AxiosFactory.getInstance();

    return axios.post(API_URL, body)
        .then(response => {
            return response.status > 200
                && response.status < 400;
        })
        .catch(error => {
            console.log(error)
            return false
        })
}

export default loginApi;
