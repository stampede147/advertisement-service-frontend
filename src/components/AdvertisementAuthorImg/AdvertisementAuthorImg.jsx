import './AdvertisementAuthorImg.css'
import State from "../../redux/state";

const AdvertisementAuthorImg = ({state: advertisement}) => {
    advertisement = State.advertisementsPage.content[0];
    return (
        <div className='advertisement-author-img-root'>
            <div className="advertisement-image">
                <img src={advertisement.imgSourceUrl}/>
            </div>

            <div className="advertisement-author-image">
                <img src={advertisement.owner.imgSourceUrl}/>

            </div>


        </div>

    )
}

export default AdvertisementAuthorImg;