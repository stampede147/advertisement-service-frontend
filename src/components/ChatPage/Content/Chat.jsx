import './Content.css'
import MessageContainer from "../MessageContainer/MessageContainer";
import ChatActions from "../Actions/ChatActions";
import ChatHeader1 from "../ContentHeader/ChatHeader1";
import ChatHeader from "../../generic/GenericChatHeader/ChatHeader";

const Chat = ({state}) => {

    return (
        <div className="main-chat-root">
            <ChatHeader state={state.chat}/>
            <MessageContainer state={state.messages}/>
            <ChatActions state={state.chat}/>
        </div>
    )
}

export default Chat;