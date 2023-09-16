import React from "react";
import PATHNAMES from "../../../constants/PATHNAMES";
import DropdownMenu from "../../common/DropdownMenu/DropdownMenu";


export default () => {

    const groups = [[
        {
            title: 'Chats',
            link: PATHNAMES.PROFILE_CHATS
        },
        {
            title: 'Advertisements',
            link: PATHNAMES.PROFILE_ADVERTISEMENTS
        }
    ],
        [
            {
                title: 'Logout',
                link: PATHNAMES.LOGOUT
            },
        ]
    ];

    return (
        <DropdownMenu groups={groups}/>
    );
}