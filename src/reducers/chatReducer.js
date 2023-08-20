export default function chatReducer(state, action) {
    switch (action.type) {
        case "add":
            return [
                ...state,
            ]

        case "remove" :
            return {};

    }

}

function createChat(chats, newChat) {

}

function deleteChat(chats, chatId) {

}

function findChats(chatsIds) {

}