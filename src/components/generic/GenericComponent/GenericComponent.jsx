import React from "react";
import './GenericComponent.css'

const GenericComponent = ({
                                header: Header,
                                leftContent: LeftContent,
                                rightContent: RightContent,
                                state
                            }) => {
    return (
        <div className='root__cc'>
            <div className='root-content__cc'>

                <div className='header__cc'>
                    <Header state={state}/>
                </div>

                <div className='content-container__cc'>
                    <div className='left-content__cc'>
                        <LeftContent state={state}/>
                    </div>
                    <div className='right-content__cc'>
                        <RightContent state={state}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GenericComponent;