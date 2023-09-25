import React from "react";



export default ({columnValue: Column, size, ...props}) => {

    const RightLayoutSizeXS = ({columnValue: Column, ...props}) => {
        return <div className={'div-div-layout div-layout-xs-size'}>
            <Column {...props}/>
        </div>
    };


     const RightLayoutSizeS = ({columnValue: Column, ...props}) => {
        return <div className={'div-div-layout div-layout-s-size'}>
            <Column {...props}/>
        </div>
    };


     const RightLayoutSizeL = ({columnValue: Column, ...props}) => {
        return <div className={'div-div-layout div-layout-l-size'}>
            <Column {...props}/>
        </div>
    };

     const RightLayoutSizeM = ({columnValue: Column, ...props}) => {
        return <div className={'div-div-layout div-layout-m-size'}>
            <Column {...props}/>
        </div>
    };


    if (size === "XS") {
        return <RightLayoutSizeXS columnValue={Column}  {...props}/>;
    }
    if (size === "S") {
        return <RightLayoutSizeS columnValue={Column}  {...props}/> ;
    }
    if (size === "M") {
        return <RightLayoutSizeM columnValue={Column}  {...props}/> ;
    }
    if (size === "L") {
        return <RightLayoutSizeL columnValue={Column}  {...props}/> ;
    }


}