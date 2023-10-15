import axiosFactory from "./configuration/AxiosFactory";
import chat from "../components/Chat/Chat";
import PATHNAMES from "../constants/PATHNAMES";

const API_PATHNAME = `/user/messages`

const axios = axiosFactory.getInstance();

export function getChatMessages(chatId) {
    const body = {};
    return axios.get(`${API_PATHNAME}?chatId=${chatId}`, chatId)
        .then(resp => resp.data)
        .catch(resp => resp);

}

export function sendChatMessage(chatId, body, senderId){
    const responseBody = {
        chatId: chatId,
        body: body,
    }
    return axios.post(`${API_PATHNAME}`, responseBody)
}

export function getLastChatMessageByChatIds(chatIds){
    return axios.get(`${API_PATHNAME}?chatIds=${chatIds}`)
        .then(resp => resp.data)

}