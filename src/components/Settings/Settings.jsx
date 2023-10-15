import React, {useEffect, useState} from "react";
import './Settings.css'
import {Link, useNavigate} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";
import * as advertisementApi from "../../api/userAdvertisementApi";
import * as useApi from "../../api/userApi";
import StubComponent from "../StubComponent/StubComponent";

export default () => {

    const [userDetails, setUserDetails] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        useApi.getUserDetails()
            .then(resp => {
                console.log(resp)
                setUserDetails(resp)
                setLoading(false)
            })

    }, [])

    const SettingsBlock = ({title, content: Content, ...props}) => {
        return (
            <div className={'content-entry-root'}>
                <h2 className={'content-entry-title'}>
                    {title}
                </h2>
                <div className={'content-entry-content'}>
                    <Content {...props}/>
                </div>
            </div>
        );
    }

    const NameBlock = ({firstName, lastName}) => {
        const NameBlockContent = () => {
            return (
                <div className={'content-user-name'}>
                    <div className={'content-user-fname content-user-name-style'}>
                        <div className={'content-user-fname-key title-paragraph-key'}>Имя:</div>
                        <div className={'content-user-fname-value title-paragraph-value'}>{firstName}</div>
                    </div>
                    <div className={'content-user-lname content-user-name-style'}>
                        <div className={'content-user-lname-key title-paragraph-key'}>Фамилия:</div>
                        <div className={'content-user-lname-value title-paragraph-value'}> {lastName}</div>
                    </div>
                </div>);
        }

        return <SettingsBlock
            title={"Контактная информация"}
            content={NameBlockContent}
        />
    }

    const DeleteBlock = () => {

        const DeleteBlockContent = () => {
            return (
                <div className={'delete-profile-block delete-profile-block-style'}>
                    <div className={'delete-profile-block-title'}>
                        Все данные профиля, объявления будут удалены
                    </div>
                    <Link to={PATHNAMES.PROFILE_DELETE}>
                        Удалить
                    </Link>
                </div>);

        }

        return <SettingsBlock title={"Удаление профиля"}
                              content={DeleteBlockContent}/>
    }

    if (loading){
        return <StubComponent/>
    }

    return (
        <div className={'content-settings-root'}>
            <NameBlock firstName={userDetails.firstName} lastName={userDetails.lastName}/>
            <DeleteBlock/>

        </div>
    );
}
