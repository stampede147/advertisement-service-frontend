import './AdvertisementInfo.css'

const AdvertisementInfo = ({state : advertisement}) => {
    return (
        <div className='advertisement-info-root'>
            <div className='advertisement-info-author-name'>
                {advertisement.owner.name}
            </div>
            <div className='advertisement-info-title'>
                <div className='advertisement-info-title-title'>
                    {advertisement.title}
                </div>
                <div className='advertisement-info-title-price'>
                    {advertisement.price}
                </div>
            </div>
            <div className='advertisement-message'>
                <span>Привет, как дела11!</span>
            </div>
        </div>
    );
}
export default AdvertisementInfo;