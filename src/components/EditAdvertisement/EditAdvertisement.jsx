import React from "react";
import EditGroup from "./EditStep/EditStep";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import StubComponent from "../StubComponent/StubComponent";


export default () => {


    return (
        <IndexContainer navbar={StubComponent}
                        content={() => {
                            return <div className={'index-edit-ad-root'}>
                                <form>
                                    <EditGroup/>
                                    <EditGroup/>
                                    <EditGroup/>
                                    <EditGroup/>
                                </form>
                            </div>
                        }
                        }/>
    )
}