import GenericComponent from "../CompositeComponent/GenericComponent";
import SearchHeader from "../SearchHeader/SearchHeader";
import ProfileBar from "../ProfileBar/ProfileBar";
import ChatsContainer from "./ChatsContainer";

const MyChats = (props) => {
    return (
        <GenericComponent header={SearchHeader}
                          leftContent={ProfileBar}
                          rightContent={ChatsContainer}
                          state={props.state}
        />
    )
}

export default MyChats