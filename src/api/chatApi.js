import httpRequest from "./configuration/httpRequest";
import axiosFactory from "./configuration/AxiosFactory";

const axios = axiosFactory.getInstance();

const API_PATHNAME = "/chats";

export function createChat(body) {
    axios.post(API_PATHNAME, body)  ;
}


export function deleteChat(chatId) {
    let options = {
        method: httpRequest.DELETE,
        headers: new Headers({
            "Content-Type": 'application/json',
        }),
        mode: 'cors',
    }
    return fetch(API_PATHNAME + '/' + chatId, options)
        .then(resp => resp.status);

}

export function getChatsByUserId(userId) {

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

    fetch(API_PATHNAME + '/' + chatId)
}