import "./ChatsContainer.css"
import ChatCard from "./ChatCard";

const ChatsContainer = ({state, ...props}) => {

    let chatsContent = state.chatsPage.content;
    const mappedChats = chatsContent.map(chat => {
        return (
            <ul key={chat.id}>
                <ChatCard chat={chat}/>
            </ul>
        )
    })
    return (
        <div className="chats-content-root">
            <div className="chat-list">
                <div className="chat-list-header">
                    <h1>Messages</h1>
                </div>
                <div className="chat-list-content">
                    {mappedChats}
                </div>

            </div>
        </div>
    )
        ;
}

export default ChatsContainer;