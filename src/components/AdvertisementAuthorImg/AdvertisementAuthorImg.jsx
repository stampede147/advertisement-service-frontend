import './AdvertisementAuthorImg.css'

const ChatAdvertisementAuthorImg = ({state: chat}) => {
    const advertisement = chat.advertisement;
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

export default ChatAdvertisementAuthorImg;