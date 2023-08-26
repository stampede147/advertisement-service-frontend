import React, {forwardRef, useEffect, useRef} from "react";

const ItemHeader = forwardRef(function (props, ref) {

    const {header: Header, ...otherProps} = props;
    return (
        <div ref={ref} className='item-header-root' style={{marginBottom: '5px'}}>
            <Header advertisement={props.advertisement}/>
        </div>
    );
});

export default ItemHeader;
