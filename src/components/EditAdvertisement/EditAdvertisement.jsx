import React, {useCallback, useState} from "react";
import './EditAdvertisement.css'
import SingleContainer from "../../container/SingleContainer/SingleContainer";
import EditAdvertisementContent from "./EdtiAdvertisementContent/EditAdvertisementContent";
import EditAdvertisementHeader from "./EditAdvertisementHeader/EditAdvertisementHeader";
import EditAdvertisementFooter from "./EditAdvertisementFooter/EditAdvertisementFooter";
import StubComponent from "../StubComponent/StubComponent";
import * as userAdvertisementApi from '../../api/userAdvertisementApi'
import ProfileBar from "../ProfileBar/ProfileBar";


const EditAdvertisement = (props) => {


    const [selectedCategories, setSelectedCategories] = useState([props.categoryNode]);
    const [showDropdownMenu, setShowDropdownMenu] = useState(true);
    const [responseBody, setResponseBody] = useState({})

    const selectCategory = (categoryNode) => {
        if (categoryNode.children.length === 0) {
            setShowDropdownMenu(false);
            responseBody.categoryId = categoryNode.id
            setResponseBody(responseBody);

        }

        // if selected now category the same that selected before
        if (categoryNode.id === selectedCategories.at(-1).id) {
            return;
        }

        // if selected now category is the child of last selected category
        if (categoryNode.parentId === selectedCategories.at(-1).id) {
            categoryNode.isSelected = true;
            setSelectedCategories([...selectedCategories, categoryNode])
            return;
        }

        // if selected now category and the last selected category have the same parent category
        if (categoryNode.parentId === selectedCategories.at(-1).parentId) {

            selectedCategories.pop().isSelected = null;
            categoryNode.isSelected = true;
            setSelectedCategories([...selectedCategories, categoryNode])
            return;
        }

        let index = selectedCategories.findIndex(selected => selected.parentId === categoryNode.parentId);
        for (let i = index; i < selectedCategories.length; i++) {
            selectedCategories[i].isSelected = false;
        }
        categoryNode.isSelected = true;
        setSelectedCategories([...selectedCategories.slice(0, index), categoryNode]);
    };

    const onHeaderClick = () => {
        setShowDropdownMenu(true);
    }

    const onPublishButtonClick = () => {
        userAdvertisementApi.create(responseBody);
    }

    const onChangeFieldValue = (field) => {
        console.log(responseBody)
        const target = field.target
        responseBody[target.id] = target.value;
    }

    const EditComponent = () => {

        return <div className={'index-edit-ad-root'}>

            <div className={'edit-group-header index-edit-elem'}>
                <EditAdvertisementHeader onClick={onHeaderClick}
                                         enabled={showDropdownMenu}
                                         selectedCategories={selectedCategories}
                                         selectCategory={selectCategory}/>
            </div>

            <div className={'edit-group-content index-edit-elem'}>
                {!showDropdownMenu && <EditAdvertisementContent onChangeFieldValue={onChangeFieldValue}/>}
            </div>

            <div className={'edit-group-footer index-edit-elem'}>
                {!showDropdownMenu && <EditAdvertisementFooter onPublishButtonClick={onPublishButtonClick}/>}
            </div>

        </div>
    }

    return <SingleContainer content={EditComponent}/>;

};


export default EditAdvertisement;