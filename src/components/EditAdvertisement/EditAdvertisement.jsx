import React, {useState} from "react";
import './EditAdvertisement.css'
import SingleContainer from "../../container/SingleContainer/SingleContainer";
import EditAdvertisementContent from "./EdtiAdvertisementContent/EditAdvertisementContent";
import EditAdvertisementHeader from "./EditAdvertisementHeader/EditAdvertisementHeader";
import EditAdvertisementFooter from "./EditAdvertisementFooter/EditAdvertisementFooter";
import * as userAdvertisementApi from '../../api/userAdvertisementApi'
import * as imageApi from "../../api/imageApi";
import {redirect, useNavigate} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";


const EditAdvertisement = (props) => {

    const [selectedCategories, setSelectedCategories] = useState([props.navigation]);

    const navigate = useNavigate();

    const [showDropdownMenu, setShowDropdownMenu] = useState(true);

    const [responseBody, setResponseBody] = useState({})

    const selectCategory = (navigationNode) => {
        if (!navigationNode.children) {

            responseBody.categoryId = navigationNode.id
            setResponseBody(responseBody);

            setShowDropdownMenu(false);

        }

        // if selected now category the same that selected before
        if (navigationNode.id === selectedCategories.at(-1).id) {
            return;
        }

        // if selected now category is the child of last selected category
        if (navigationNode.parentId === selectedCategories.at(-1).id) {
            navigationNode.isSelected = true;
            setSelectedCategories([...selectedCategories, navigationNode])
            return;
        }

        // if selected now category and the last selected category have the same parent category
        if (navigationNode.parentId === selectedCategories.at(-1).parentId) {

            selectedCategories.pop().isSelected = null;
            navigationNode.isSelected = true;
            setSelectedCategories([...selectedCategories, navigationNode])
            return;
        }

        let index = selectedCategories.findIndex(selected => selected.parentId === navigationNode.parentId);
        for (let i = index; i < selectedCategories.length; i++) {
            selectedCategories[i].isSelected = false;
        }
        navigationNode.isSelected = true;
        setSelectedCategories([...selectedCategories.slice(0, index), navigationNode]);
    };

    const onHeaderClick = () => {
        setShowDropdownMenu(true);
    }

    const onPublishButtonClick = () => {
        userAdvertisementApi.create(responseBody)
            .then(setTimeout(resp => navigate(PATHNAMES.PROFILE_ADVERTISEMENTS)), 5000)
    }

    const onChangeFieldValue = (field) => {
        const target = field.target

        if (target.id === "images") {
            let formData = new FormData();
            formData.append("image", target.files[0]);

            imageApi.saveImage(formData)
                .then(resp => {
                    if (responseBody[target.id] === undefined) {
                        responseBody[target.id] = [];
                    }

                    responseBody[target.id] = [...responseBody[target.id], resp.id];
                });

            return;
        }

        responseBody[target.id] = target.value;
    }

    return <div className={'index-edit-ad-root'}>

            <div className={'edit-group-header index-edit-elem'}>
                <EditAdvertisementHeader onClick={onHeaderClick}
                                         enabled={showDropdownMenu}
                                         selectedCategories={selectedCategories}
                                         selectCategory={selectCategory}/>
            </div>

            <div className={'edit-group-content index-edit-elem'}>
                {!showDropdownMenu && <EditAdvertisementContent navigation={selectedCategories.at(-1).navigation}
                                                                onChangeFieldValue={onChangeFieldValue}/>}
            </div>

            <div className={'edit-group-footer index-edit-elem'}>
                {!showDropdownMenu && <EditAdvertisementFooter onPublishButtonClick={onPublishButtonClick}/>}
            </div>

        </div>;
};


export default EditAdvertisement;