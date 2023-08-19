import React, {useEffect} from "react";

const ItemHeader = ({
                        advertisement,
                        header: Header
                    }) => {

    useEffect(() => {
        resizeHeight('item-header-root')
    }, []);

    return (
        <div className='item-header-root' style={{marginBottom: '5px'}}>
            <Header advertisement={advertisement}/>
        </div>
    )

}

export default ItemHeader;

function resizeHeight(name) {
    let elements = document.getElementsByClassName(name);

    let maxHeight = -1;
    for (let element of elements) {
        let offsetHeight = element.offsetHeight;
        if (offsetHeight > maxHeight) {
            maxHeight = offsetHeight;
        }
    }

    if (maxHeight < 0) {
        return;
    }

    for (let element of elements) {
        element.style.height = maxHeight + 'px';
        element.style.top = maxHeight + 'px';
    }

}
