import './GenericChatHeader.css'
const GenericChatHeader = ({
                               left: Left,
                               right: Right,
                               state
                           }) => {

    return (
        <div className='chat-header-root'>
            <div className='left-block-content'>
                <Left state={state}/>
            </div>
            <div className='right-block-content'>
                <Right state={state}/>
            </div>

        </div>
    )

}

export default GenericChatHeader;