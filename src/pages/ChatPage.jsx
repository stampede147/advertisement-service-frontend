import GenericComponent from "../components/generic/GenericComponent/GenericComponent";
import SearchHeader from "../components/SearchHeader/SearchHeader";
import Content from "../components/ChatPage/Content/Content";
import ProfileBar from "../components/ProfileBar/ProfileBar";
import StubComponent from "../components/StubComponent/StubComponent";

const ChatPage = (props) => {

    return(
        <GenericComponent state={props.state}
                          header={SearchHeader}
                          leftContent = {ProfileBar}
                          rightContent={Content}
        />
    );
}

export default ChatPage