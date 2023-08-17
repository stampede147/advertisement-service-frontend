import GenericComponent from "../components/generic/GenericComponent/GenericComponent";
import SearchHeader from "../components/SearchHeader/SearchHeader";
import ProfileBar from "../components/ProfileBar/ProfileBar";
import Advertisement from "../components/Advertisement/Advertisement";


const AdvertisementPage = ({state}) => {
    return <GenericComponent header={SearchHeader}
                             leftContent={ProfileBar}
                             rightContent={Advertisement}
                             state={state}
    />
}

export default AdvertisementPage;