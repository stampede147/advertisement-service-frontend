import './AdvertisementAuthorImg.css'
import ImgBlock from "../common/ImgBlock";

const ChatAdvertisementAuthorImg = ({state: chat}) => {
    const advertisement = chat.advertisement;
    return (
        <div className='advertisement-author-img-root'>
            <ImgBlock className='advertisement-image' src = {advertisement.imgSourceUrl}/>
            <ImgBlock className='advertisement-author-image' src = {advertisement.owner.imgSourceUrl}/>
        </div>

    )
}

export default ChatAdvertisementAuthorImg;