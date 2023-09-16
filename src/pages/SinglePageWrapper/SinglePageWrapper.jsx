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
                    <Header state={state}/>
                </div>
                <div className='content-container__cc'>
                    <Content state={state}/>
                </div>
                <div className={'footer_cc'}>
                    <Footer state={state}/>
                </div>

            </div>
        </div>
    )
}

export default SinglePageWrapper;