import ChatStateProvider from "./ChatStateProvider";

const TYPE_ENUM = {
    CHAT_PAGE: "CHAT",
    LOGIN_PAGE: "LOGIN",
    REGISTER_PAGE: "REGISTER",
    SEARCH_BAR: "SEARCH",
    MY_ADVERTISEMENTS_PAGE: "MY_ADVERTISEMENTS",
    MY_CHATS_PAGE: "MY_CHATS",
}


class StateManager {

    static #STATE_PROVIDERS = [
        new ChatStateProvider()
    ];

    manage(action) {

        for (const provider of StateManager.#STATE_PROVIDERS) {
            return provider.supports(action.type)
                ? provider.process(action.details)
                : new Error("Not found appropriate state provider");
        }
    }

}

export default StateManager;