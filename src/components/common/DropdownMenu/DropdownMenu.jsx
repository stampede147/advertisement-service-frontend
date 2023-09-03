import {Link} from "react-router-dom";
import React from "react";

function DropdownMenu({groups, ...props}) {


    function mapGroups(groups) {
        return groups.map(group =>
            <div className={"menu-block"}>
                {mapGroupEntries(group)}
            </div>
        );
    }

    function mapGroupEntries(entries) {
        return entries.map(entry =>
            <Link className={'index-dropdown-link'} to={entry.link}>
                {entry.title}
            </Link>
        )
    }


    // const mapped = groups.map(entry =>
    //     <Link className={'index-dropdown-link'} to={entry.link}>
    //         {entry.title}
    //     </Link>)

    return <div className={'dropdown-menu-popup'}>
        <ul className={'menu-block-list'}>
            {/*<div className={'menu-block'}>*/}
            {/*    {mapped}*/}
            {/*</div>*/}
            {/*<div className={'menu-block'}>*/}
            {/*    <Link to={"/logout"}>*/}
            {/*        logout*/}
            {/*    </Link>*/}
            {/*</div>*/}

            {mapGroups(groups)}
        </ul>
    </div>
}


export default DropdownMenu;