export default function chatMessageReducer(state, action) {
    console.log('called reducer!');

    switch (action.type) {
        case 'add' :
            return [...state, action.data]
    }


}

function createChatMessage(data) {
    return {
        messageId: 22,
        senderId: 15,

    }
}


//chat messageId, newText
function updateChatMessage(state) {

}


//chat id
function deleteChatMessage(state) {

}

function findChatMessages(state) {
}
