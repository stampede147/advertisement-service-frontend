import './ChatCard.css'
const ChatCard = ({chat}) => {
    console.log(chat)
    return (
        <div className="chat-card-root__cc">
            <div className="left-content-info__cc">
                <div className="item-author-preview__cc">
                    <div className="item-icon__cc">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX4e9TfOmFxxc9Veul-RLjWTnrX-FWPezbXNSHgAi&s'/>
                    </div>
                    <div className="author-icon__cc">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX4e9TfOmFxxc9Veul-RLjWTnrX-FWPezbXNSHgAi&s'/>
                    </div>
                </div>
            </div>

            <div className="right-content-info">
                <div className="chat-name-root">
                    <h3 className='chat-name-name'>{chat.advertisement.owner.name}</h3>
                </div>
                <div className="chat-item-root">
                    <span className='chat-item-name'>{chat.advertisement.title}</span>
                    <span className='chat-item-price'>{chat.advertisement.price}P</span>
                </div>
                <div className="chat-message-root">
                    <div className="chat-message-content">
                        <span>Привет, как дела11111111111111111111111111111111111111111!</span>
                    </div>
                </div>
            </div>
        </div>
)
}

export default ChatCard;