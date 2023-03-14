import React, { useEffect, useState, useMemo } from 'react';
import { TabPane, Nav, NavItem, NavLink, Modal, ModalHeader, Button, TabContent } from "reactstrap";
import classnames from "classnames";
import { columnsProductData } from '../TestData'
import TableContainer from "../../../../Components/Common/TableContainer";

import { getProductDatas } from "../../../../helpers/fakebackend_helper";

const ProductData = () => {
    const columns = useMemo(() => columnsProductData, []);

    const [dataList, setDataList] = useState([]);
    const [dataId, setDataId] = useState(1);
    useEffect(() => {
        getDataList();
    }, []);

    useEffect(() => {
        var temp = dataList;
        temp.map((e, key) => {
            e.morebtn = (<div className="edit">
            <Button 
                className="btn btn-soft-primary btn-sm edit-item-btn shadow-none" 
                data-bs-toggle="modal" 
                data-bs-target="#showModal"
                onClick={() => { tog_togFirst(); setDataId(e.id); }}
            >
                <span className='pt-1'>more</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right ">
                    <g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g>
                </svg>
            </Button>
            </div>);
        });
        setDataList(temp);
    }, [dataList]);

    const getDataList = () => {
        getProductDatas().then(data => {
            setDataList(data.reverse());
        })
    }
    // Modal
    const [modal_togFirst, setmodal_togFirst] = useState(false);
    function tog_togFirst() {
        setmodal_togFirst(!modal_togFirst);
    }

    const [modal_togSecond, setmodal_togSecond] = useState(false);
    function tog_togSecond() {
        setmodal_togSecond(!modal_togSecond);
    }

    // Border Top Nav Justified Tabs
    const [topBorderjustifyTab, settopBorderjustifyTab] = useState("1");
    const topBorderJustifytoggle = (tab) => {
        if (topBorderjustifyTab !== tab) {
        settopBorderjustifyTab(tab);
        }
    };

    return (
        <React.Fragment>
            <TabPane tabId="3" id="v-pills-product">
                <div className="all-data-list" >
                    <TableContainer
                        columns={columns}
                        data={dataList}
                        isGlobalFilter={false}
                        isGlobalSearch={true}
                        isAddUserList={false}
                        customPageSize={10}
                        divClass="table-responsive mb-1"
                        tableClass="mb-0 table-borderless overflow-hidden"
                        theadClass="text-muted"
                    />
                </div>
            </TabPane>

            <Modal
            isOpen={modal_togFirst}
            toggle={() => {
            tog_togFirst();
            }}
            id="firstmodal"
            centered
        >
            <ModalHeader className='purchase-setting-header'>
            To Add your Data!
            </ModalHeader>
            <div className="modal-body text-center">
            <div className=" ">
                <h4 className="mb-4">Would you add your data really? You have to pay!</h4>
                <Nav tabs className="nav nav-tabs nav-border-top nav-border-top-primary mb-3">
                <NavItem>
                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: topBorderjustifyTab === "1", })} onClick={() => { topBorderJustifytoggle("1"); }} >
                    Real score
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: topBorderjustifyTab === "2", })} onClick={() => { topBorderJustifytoggle("2"); }} >
                    Free score
                    </NavLink>
                </NavItem>
                </Nav>

                <TabContent activeTab={topBorderjustifyTab} className="text-muted">
                <TabPane tabId="1" id="nav-border-top-home">
                    <div className="d-block purchase-pro-setting mt-5">
                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                        <span>current: </span><p>100 Won</p>
                    </div><br /><hr />
                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                        <span>pay: </span><p>100 Won</p>
                    </div><br /><hr />
                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                        <span>real valance: </span><p>none</p>
                    </div><br /><hr /><br />
                    </div>
                </TabPane>

                <TabPane tabId="2" id="nav-border-top-home">
                    <div className="d-block purchase-pro-setting mt-5">
                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                        <span>current: </span><p> </p>
                    </div><br /><hr />
                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                        <span>pay: </span><p>100 Won</p>
                    </div><br /><hr />
                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                        <span>free valance: </span><p>none</p>
                    </div><br /><hr /><br />
                    </div>
                </TabPane>
                </TabContent>
                <div className='purchase-button-group mb-5'>
                <Button color="primary"  onClick={(e) => {
                    tog_togSecond();
                    tog_togFirst(false);
                    e.preventDefault();
                }} style={{ float: "left" }}>
                    pay
                </Button>
                <Button color="primary" onClick={() => { }} style={{ float: "right" }}>
                    charge
                </Button>
                </div><br /><br />
            </div>
            </div>
            </Modal>

            <Modal
            isOpen={modal_togSecond}
            toggle={() => {
            tog_togSecond();
            }}
            id="secondmodal"
            centered
        >
            <div className="modal-body text-center p-3">
            <div className="mt-4 pt-3 pb-3">
                <h4 className="mb-3">Do you purchase really?</h4>
                <div className="hstack gap-2 justify-content-center">
                <NavLink href="view-data" className=' d-inline'>
                    <Button color="primary" className="ms-3" href = {"/product-details/"+dataId}  onClick={() => tog_togSecond(false)}>Yes</Button>
                </NavLink>
                <Button color="primary" className="me-3" onClick={() => tog_togSecond(false)}>No</Button>
                </div>
            </div>
            </div>

            </Modal>
        </React.Fragment>
    )
}

export default ProductData;