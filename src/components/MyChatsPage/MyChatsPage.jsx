import GenericComponent from "../CompositeComponent/GenericComponent";
import SearchHeader from "../SearchHeader/SearchHeader";
import ProfileBar from "../ProfileBar/ProfileBar";
import ChatsPreviewContainer from "./ChatsPreviewContainer";

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