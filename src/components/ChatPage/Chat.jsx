import './Chat.css'
import ChatMessageContainer from "../ChatMessageContainer/ChatMessageContainer";
import ChatActions from "./ChatActions";
import ChatHeader1 from "./ChatHeader1";

const Chat = ({state}) => {

    return (
        <div className="main-chat-root">
            <ChatHeader1 state={state.chat}/>
            <ChatMessageContainer state={state.messages}/>
            <ChatActions state={state.chat}/>
        </div>
    )
}

export default Chat;