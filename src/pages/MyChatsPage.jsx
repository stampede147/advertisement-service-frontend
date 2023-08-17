import GenericComponent from "../components/generic/GenericComponent/GenericComponent";
import SearchHeader from "../components/SearchHeader/SearchHeader";
import ProfileBar from "../components/ProfileBar/ProfileBar";
import ChatsPreviewContainer from "../components/MyChatsPage/ChatsPreviewContainer";

const MyChats = ({state}) => {
    return (
        <GenericComponent header={SearchHeader}
                          leftContent={ProfileBar}
                          rightContent={ChatsPreviewContainer}
                          state={state}
        />
    )
}

export default MyChats