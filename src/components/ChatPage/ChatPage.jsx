import GenericComponent from "../GenericComponent/GenericComponent";
import SearchHeader from "../SearchHeader/SearchHeader";
import Chat from "./Chat";
import ProfileBar from "../ProfileBar/ProfileBar";
import StubComponent from "../StubComponent/StubComponent";

const ChatPage = (props) => {

    return(
        <GenericComponent state={props.state}
                          header={SearchHeader}
                          leftContent = {ProfileBar}
                          rightContent={Chat}
        />
    );
}

export default ChatPage