import React from "react";
import './Advertisement.css'


const Advertisement = ({header: Header, advertisement}) => {
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

    return (
        <div className='advertisement-content' onLoad={resizeHeight}>
            <div className='advertisement-content-wrapper'>
                <div className='header-root'>
                    <Header/>
                </div>
                <div className="item-content-container">
                    <div className='item-left-block'>
                        <div className="item-header item-header-left">
                            <div className="item-title">
                                <div className="item-name-view-info">
                                    <h1>{advertisement.title}</h1>
                                </div>
                                <div className="item-details">
                                    <div className="item-created-view-info">
                                        <p>{advertisement.createdAt}</p>
                                    </div>
                                    <div className="item-id-view-info">
                                        <p>№{advertisement.id}</p>

                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="item-content">
                            <div className="item-img">
                                <img className="item-img" src={advertisement.imgSourceUrl}/>
                            </div>
                            <div className="item-description">
                                <div className="item-description-view-info">
                                    <span>
                                        {advertisement.description}
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='item-right-block'>
                        <div className="item-header item-header-right">
                            <div className="item-price-view-info">

                                <h1>{advertisement.price}P</h1>
                            </div>

                        </div>
                        <div className="author-content-container">
                            <div className="item-author-details">
                                <div className="author-icon-format">
                                    <img className="item-author-img" src={advertisement.owner.imgSourceUrl}/>
                                </div>
                                <div className="item-author-name">
                                    <p>{advertisement.owner.name}</p>
                                </div>

                                <div className="item-author-actions">
                                    <ul className="item-author-actions-list">
                                        <li>
                                            <button onClick={resizeHeight}>
                                                Send a message
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Advertisement;