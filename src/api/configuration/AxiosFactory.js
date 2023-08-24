import axios from "axios";
import HttpRequest from "./httpRequest";

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
        });

        this.#instance.interceptors.request.use(req => {
            if (req.method === HttpRequest.POST) {
                req.headers = {...req.headers, 'Content-Type': 'application/json'};
            }
            return req;
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
                console.log(error)
                if (error.response.status === 401) {
                    window.location.pathname = '/login';
                }
                return error;
            })

        return this.#instance;
    }
}

export default AxiosFactory;

function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}