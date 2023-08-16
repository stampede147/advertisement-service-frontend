import './AdvertisementInfo.css'

const AdvertisementInfo = ({state: chat}) => {
    let advertisement = chat.advertisement;
    return (
        <div className='chat-preview-info-root'>
            <div className='advertisement-info-author-name'>
                {advertisement.owner.name}
            </div>
            <div className='advertisement-info-title__ai'>
                <div className='advertisement-info-title-title'>
                    {advertisement.title}
                </div>
                <div className='advertisement-info-title-price'>
                    {advertisement.price} P
                </div>
            </div>
            <div className='advertisement-message'>
                <span className='advertisement-message-text'>Привет, как дела11!</span>
            </div>
        </div>
    );
}
export default AdvertisementInfo;