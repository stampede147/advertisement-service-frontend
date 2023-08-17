import './Content.css'
import MessageContainer from "../MessageContainer/MessageContainer";
import ChatActions from "../Actions/ChatActions";
import ContentHeader from "../ContentHeader/ContentHeader";

const Content = ({state}) => {

    return (
        <div className="main-chat-root">
            <ContentHeader state={state.chat}/>
            <MessageContainer state={state.messages}/>
            <ChatActions state={state.chat}/>
        </div>
    )
}

export default Content;