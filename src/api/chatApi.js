import httpRequest from "./configuration/httpRequest";
import axiosFactory from "./configuration/AxiosFactory";

const axios = axiosFactory.getInstance();

const API_PATHNAME = "/user/chats";

export function createChat(body) {
    axios.post(API_PATHNAME, body)  ;
}

export function getChats(){
    return axios.get(API_PATHNAME).then(resp => resp.data);
}


export function deleteChat(chatId) {
    let options = {
        method: httpRequest.DELETE,
        mode: 'cors',
    }

    return fetch(API_PATHNAME + '/' + chatId, options)
        .then(resp => resp.status);

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