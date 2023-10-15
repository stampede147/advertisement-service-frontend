import React from "react";
import './SinglePageWrapper.css'
import StubComponent from "../../components/StubComponent/StubComponent";

const SinglePageWrapper = ({
                               header: Header,
                               content: Content,
                               footer: Footer = StubComponent,
                               state
                           }) => {


    return (
        <div className='root__cc'>
            <div className='root-content__cc'>
                <div className='header__cc'>
                    {Header}
                </div>
                <div className='content-container__cc'>
                    {Content}
                </div>
                <div className={'content-footer__cc'}>
                    {Footer}
                </div>

            </div>
        </div>
    )
}

export default SinglePageWrapper;