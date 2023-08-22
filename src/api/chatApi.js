import httpRequest from "./configuration/httpRequest";
import axiosFactory from "./configuration/AxiosFactory";

const API_URL = "http://localhost:8080/api/v1/chats";

export function createChat(body) {
    let options = {
        method: httpRequest.POST,
        headers: new Headers({
            "Content-Type": 'application/json',
        }),
        mode: 'cors',
        body: JSON.stringify(body),
    }
    fetch(API_URL, options)
        .then(resp => resp.headers)
        .then(headers => {
            console.log(headers)
        });

}

export function deleteChat(chatId) {
    let options = {
        method: httpRequest.DELETE,
        headers: new Headers({
            "Content-Type": 'application/json',
        }),
        mode: 'cors',
    }
    return fetch(API_URL + '/' + chatId, options)
        .then(resp => resp.status);

}

export function getChatsByUserId(userId) {

    const axios = axiosFactory.getInstance();
    return axios.get(`chats?userId=${userId}`, {})
        .then(resp => resp.data);
}

export function getChat(chatId) {
    let options = {
        method: httpRequest.GET,
        headers: new Headers({
            "Content-Type": 'application/json',
        }),
        mode: 'cors',
    }

    fetch(API_URL + '/' + chatId)
}