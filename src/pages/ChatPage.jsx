import GenericPage from "./generic/GenericPage";
import SearchHeader from "../components/SearchHeader/SearchHeader";
import Chat from "../components/ChatPage/Content/Chat";
import ProfileBar from "../components/ProfileBar/ProfileBar";
import StubComponent from "../components/StubComponent/StubComponent";

const ChatPage = (props) => {

    return(
        <GenericPage state={props.state}
                     header={SearchHeader}
                     leftContent = {ProfileBar}
                     rightContent={Chat}
        />
    );
}

export default ChatPage