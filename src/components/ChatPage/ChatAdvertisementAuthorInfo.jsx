import './ChatAdvertisementAuthorInfo.css'

const ChatAdvertisementAuthorInfo = ({state: chat}) => {

    let advertisement = chat.advertisement;

    return (
        <div className='chat-advertisement-author-info-root'>
            <div className='advertisement-author-name'>
                {advertisement.owner.name}
            </div>
            <div className='advertisement-info-root'>
                <div className='advertisement-info-title'>
                    {advertisement.title}
                </div>
                <div className='advertisement-info-price price'>
                    {advertisement.price}
                </div>
            </div>
        </div>
    );
}

export default ChatAdvertisementAuthorInfo;