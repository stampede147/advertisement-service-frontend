/*

 */


import AbstractStateProvider from "./AbstractStateProvider";

class ChatStateProvider extends AbstractStateProvider {

    #CHAT_PAGE_SUPPORT = "CHAT"

    process(actionDetails) {
        console.log(actionDetails)
    }

    supports(stateType) {
        return typeof stateType === "string"
            && this.#CHAT_PAGE_SUPPORT.includes(stateType)
    }
}

export default ChatStateProvider