import {Link} from "react-router-dom";
import React from "react";

function generateRandomKey() {
    return Math.floor(Math.random() * 1000);
}

function DropdownMenu({groups, ...props}) {


    function mapGroups(groups) {
        return groups.map(group =>
            <div key={generateRandomKey()} className={"menu-block"}>
                {mapGroupEntries(group)}
            </div>
        );
    }

    function mapGroupEntries(entries) {
        return entries.map(entry =>
            <Link key={generateRandomKey()} className={'index-dropdown-link'} to={entry.link}>
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
            {groups.map(group =>
                <ul key={generateRandomKey()} className={"menu-block"}>
                    {mapGroupEntries(group)}
                </ul>
            )}
        </ul>
    </div>
}


export default DropdownMenu;