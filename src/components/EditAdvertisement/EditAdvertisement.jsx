import React, {useState} from "react";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import Step from "../common/Step/Step";
import './EditAdvertisement.css'
import TextTable from "../TextTable/TextTable";
import ActionButton from "../common/ActionButton/ActionButton";


const EditAdvertisement = (props) => {

    const [selectedCategories, setSelectedCategories] = props.selectedCategoriesState;

    const [showDropdownMenu, setShowDropdownMenu] = props.showDropdownMenuState;


    const selectCategory = (categoryNode) => {
        if (categoryNode.children.length === 0) {
            setShowDropdownMenu(false);
        }

        // if selected now category is the child of last selected category
        if (categoryNode.parentId === selectedCategories.at(-1).id) {
            categoryNode.isSelected = true;
            setSelectedCategories([...selectedCategories, categoryNode])
            return;
        }

        // if selected now category and the last selected category have the same parent category
        if (categoryNode.parentId === selectedCategories.at(-1).parentId) {
            categoryNode.isSelected = true;
            selectedCategories.at(-1).isSelected = null;
            setSelectedCategories([...selectedCategories.slice(0, selectedCategories.length - 1), categoryNode])
            return;
        }

        let index = selectedCategories.findIndex(selected => selected.parentId === categoryNode.parentId);
        for (let i = index; i < selectedCategories.length; i++) {
            selectedCategories[i].isSelected = false;
        }
        setSelectedCategories([...selectedCategories.slice(0, index), categoryNode.isSelected = true]);
    }

    const enableDropDownMenu = () => {
        setShowDropdownMenu(true);
    }

    const EditComponentHeader = (props) => {

        const {enabled, selectedCategories, selectCategory} = props;

        let formattedCategories = selectedCategories.slice(1, selectedCategories.length).map(category => category.title).join(" / ");

        return <>
            <div className={'edit-group-header-header'}>

                <div className={'group-title-font group-title-text-size group-title-key'}>
                    <span>Category</span>
                </div>

                {!enabled &&
                    <div className={'group-title-font group-title-text-size group-title-value group-title-value'}
                         onClick={enableDropDownMenu}>
                        <span>{formattedCategories}</span>
                    </div>}
            </div>
            {enabled && <TextTable selectedCategories={selectedCategories}
                                   selectCategory={selectCategory}/>}
        </>
    }

    const EditComponentContent = (props) => {
        return <>
            <form>
                <Step title={'Parameters'}
                      fields={[{"label": "Advertisement title"}]}/>
                <Step title={'Description'}
                      fields={[
                          {"label": "Advertisement description"},
                          {"label": "Price"}]}/>
                <Step title={'Place of purchase '}
                      fields={[{"label": "Address"}]}/>
            </form>

            <div className={'edit-group-action-buttons'}>
                <div className={'exit-advertisement-button e-btn-width'}>
                    <ActionButton text={"Exit"} onClick={() => window.location.href = "https://www.google.com"}/>
                </div>
                <div className={'save-advertisement-button s-btn-width'}>
                    <ActionButton text={"Save"} onClick={() => window.location.href = "https://www.google.com"}/>
                </div>
            </div>
        </>
    }
    const EditComponent = () => {

        return <div className={'index-edit-ad-root'}>
            <div className={'edit-group-header'}>
                <EditComponentHeader enabled={showDropdownMenu}
                                     selectedCategories={selectedCategories}
                                     selectCategory={selectCategory}/>
            </div>
            <div className={'edit-group-content'}>
                {!showDropdownMenu && <EditComponentContent/>}
            </div>

        </div>
    }

    return (
        <IndexContainer navbar={() => <></>} content={EditComponent}/>
    )

};
export default EditAdvertisement;