import './Advertisement.css'
import AdvertisementLeftContentBlock from "../AdvertisementLeftContentBlock";
import AdvertisementRightContentBlock from "../AdvertisementRightContentBlock";


const Advertisement = ({state}) => {

    let advertisement = state.advertisement;
    return (
        <div className='advertisement-content' onLoad={resizeHeight}>
            <div className="advertisement-content-wrapper">
                <AdvertisementLeftContentBlock advertisement={advertisement}/>
                <AdvertisementRightContentBlock advertisement={advertisement}/>
            </div>
        </div>
    )
}

export default Advertisement;

function resizeHeight() {
    let elements = document.getElementsByClassName('item-header');

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
    }

}

