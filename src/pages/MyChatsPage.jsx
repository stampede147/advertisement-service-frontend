import GenericPage from "./generic/GenericPage";
import SearchHeader from "../components/SearchHeader/SearchHeader";
import ProfileBar from "../components/ProfileBar/ProfileBar";
import ChatsPreviewContainer from "../components/MyChatsPage/ChatsPreviewContainer";

const MyChats = ({state}) => {
    return (
        <GenericPage header={SearchHeader}
                     leftContent={ProfileBar}
                     rightContent={ChatsPreviewContainer}
                     state={state}
        />
    )
}

export default MyChats