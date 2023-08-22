import axios from "axios";

 class AxiosFactory {

    static #instance = null;

    _constructor() {
    }

    static getInstance() {

        if (this.#instance) {
            return this.#instance;
        }

        this.#instance = axios.create({
            baseURL: "http://localhost:8080/api/v1",
            withCredentials: true,
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        });

        this.#instance.interceptors.request.use(req => {

            if (!req.url.includes('/register') || req.url.includes('/login')) {
                req.headers = {
                    ...req.headers, Authorization: `Bearer ${getCookie("access_token")}`
                };
            }
            return req;
        });

        this.#instance.interceptors.response.use(response => response,
            error => {
                if (error.status === 404) {
                    window.location.pathname = '/login';
                }
                return error;
            })

        return this.#instance;
    }
}

export default AxiosFactory;

function getCookie(name)
{
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}