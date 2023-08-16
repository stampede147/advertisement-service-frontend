import GenericComponent from "../CompositeComponent/GenericComponent";
import SearchHeader from "../SearchHeader/SearchHeader";
import Chat from "./Chat";
import ProfileBar from "../ProfileBar/ProfileBar";

const Chat1 = (props) => {

    return(
        <GenericComponent state={props.state}
                          header={SearchHeader}
                          leftContent = {ProfileBar}
                          rightContent={Chat}
        />
    );
}

export default Chat1