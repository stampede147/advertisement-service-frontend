import React, {useState} from "react";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import StubComponent from "../StubComponent/StubComponent";
import Step from "../common/Step/Step";
import './EditAdvertisement.css'


export default (params) => {

    const [selected, setSelected] = useState([]);


    const EditComponent = () => {
        return <div className={'index-edit-ad-root'}>
            <form>
                <Step title={'Параметры'}
                      fields={[{"label": "Название объявления"}]}/>
                <Step title={'Подробности'}
                      fields={[
                          {"label": "Описание объявления"},
                          {"label": "Цена"}]}/>
                <Step title={'Параметры'}
                      fields={[{"label": "Место сделки"}]}/>
            </form>
        </div>
    }

    const TextTableCategoryRow = (categoryNode) => {
        const {id, title, children} = categoryNode;
        const onMouseClick = () => {

            if (selected.length === 0) {
                setSelected([categoryNode]);
                return;
            }

            if (selected.length !== 0 && categoryNode.parentId === selected.at(-1).id) {
                setSelected([...selected, categoryNode])
                return;
            }

            for (let i = 0; i < selected.length; i++) {
                if (selected[i].parentId === categoryNode.parentId) {
                    setSelected([...selected.slice(0, i), categoryNode]);
                }
            }


        }


        let activeClassName = selected.filter(elem => elem.id === id).length !== 0
            ? 'text-table-category_active'
            : '';
        return (
            <div className={`text-table-category text-table-category-size ${activeClassName}`}
                 onClick={onMouseClick}>
                {title}
            </div>);
    }

    const TextTableColumn = ({title, children, ...props}) => {
        return <div className={'text-table-column'}>
            <div className={'text-table-column-title text-table-column-title-size'}>
                {title}
            </div>
            {children.map(children => {
                return <TextTableCategoryRow id={children.id} title={children.title} children={children.children}
                                             parentId={children.parentId}/>
            })}
        </div>
    }


    const TextTable = (categoryNode) => {
        let mappedTextTableColumns = selected.map(node => node.children.length != 0
            ? <TextTableColumn title={node.title} children={node.children}/>
            : <></>);

        return <div className={'text-table-row-root'}>
            <TextTableColumn title={categoryNode.title} children={categoryNode.children}/>
            {mappedTextTableColumns}
        </div>
    }

    return (
        <IndexContainer navbar={StubComponent}
                        content={() => {
                            return <TextTable {...params.categoryNode}/>
                            // return <EditComponent/>
                        }
                        }/>
    )
}