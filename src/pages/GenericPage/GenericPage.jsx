import React from "react";
import './GenericPage.css'

const GenericPage = ({
                         header: Header,
                         content: Content,
                         state
                     }) => {

    return (
        <div className='root__cc'>
            <div className='root-content__cc'>
                <div className='header__cc'>
                    <Header state={state}/>
                </div>
                <div className='content-container__cc'>
                    <Content state={state}/>
                </div>

            </div>
        </div>
    )
}

export default GenericPage;