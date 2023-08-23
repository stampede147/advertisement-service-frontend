import axiosFactory from "./configuration/AxiosFactory";
import chat from "../components/Chat/Chat";

const API_PATHNAME = "/chat-messages"

export function getChatMessages(chatId) {
    const axios = axiosFactory.getInstance();
    const body = {};
    return axios.get(`${API_PATHNAME}?chatId=${chatId}`, body)
        .then(resp => resp.data)
        .catch(resp => resp);

}


export function sendChatMessage(chatId, body, senderId){
    const axios = axiosFactory.getInstance();
    const responseBody = {
        chatId: chatId,
        body: body,
        senderId: senderId,
        status: "CREATED"
    }
    return axios.post(`${API_PATHNAME}`, responseBody)
}