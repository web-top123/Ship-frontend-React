import classnames from "classnames";
import React, { useState, useEffect } from "react";

import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Modal, ModalBody, ModalHeader,
  Row,
  Card,
  CardHeader,
  Col,
  Input,
  Button,
  CardBody,
  Table,
  Label,
} from "reactstrap";

//Title
import BreadCrumb from "../../../Components/Common/BreadCrumb";

//data
import { sellersList } from "../../../common/data/ecommerce";

//redux
import { Link } from "react-router-dom";

//treeview
import TreeView, { flattenTree } from "react-accessible-treeview";
import { IoMdArrowDropright } from "react-icons/io";
import cx from "classnames";
import { getAllSoftwareByCategory, getAllSoftware, getProgramCategories, getTopSoftwares, addNewBrowserHistory } from '../../../helpers/fakebackend_helper';
import { downloadProgram } from "../../../helpers/fakebackend_helper";
// import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";

const Software = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const fetchData = async () => {
    getTopSoftwares().then(res => {
      setTopsoftwareData(res);
    });
    if (selectedCategoryId == 1) {
      getAllSoftware().then(softwareList => {
        setsoftwareData(softwareList);
        console.log("AAAAAAd", softwareList);
      });
    } else {
      getAllSoftwareByCategory(selectedCategoryId).then(categoryData => {
        setsoftwareData(categoryData.programs);
      });
    }
  };


  const [softwareData, setsoftwareData] = useState([]);
  const [TopsoftwareData, setTopsoftwareData] = useState([]);
  const [originalCategoryList, setOriginalCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedCategoryId])

  function getCategoryList() {
    getProgramCategories().then(categoryList => {
      let nodes = [];
      let categoryNodes = [];
      let lookupList = {};

      categoryList = categoryList.sort((a, b) => a.parentId - b.parentId);
      setOriginalCategoryList(categoryList);

      for (const category of categoryList) {
        let item = {
          id: category.id,
          category_id: category.id,
          name: category.title,
          parent_id: ((category.parentId == 0) ? null : category.parentId),
          children: []
        };
        lookupList[item.id] = item;
        nodes.push(item);
        if (item.parent_id == null) {
          categoryNodes.push(item);
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        let n = nodes[i];
        if (!(n.parent_id == null)) {
          lookupList[n.parent_id].children = lookupList[n.parent_id].children.concat([n]);
        }
      }

      let folder = {
        name: "",
        children: categoryNodes,
      };

      setAllCategories(folder);
    });
  }

  //selection category
  const [selectedSingle, setSelectedSingle] = useState(null);
  function handleSelectSingle(value) {
    if (selectedSingle != value) {
      setAllCategories(value);
    }
    setSelectedSingle(value);
  }
  const SingleOptions = [
    { value: 'folder1', label: 'Choices 1' },
    { value: 'folder2', label: 'Choices 2' },
    { value: 'folder3', label: 'Choices 3' },
    { value: 'folder4', label: 'Choices 4' }
  ];

  // Data
  const [softwareList, setsoftwareList] = useState(sellersList);

  //program detail
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [requirement, setRequirement] = useState("");
  const [description, setDescription] = useState("");
  const [recommends, setRecommends] = useState("");
  const [unrecommends, setUnRecommends] = useState("");
  const [cost, setCost] = useState("");
  const [imageId, setImageId] = useState("");
  const [programId, setProgramId] = useState("");
  const [purchases, setPurchases] = useState("");

  //modal
  // Border Top Nav Justified Tabs
  const [topBorderjustifyTab, settopBorderjustifyTab] = useState("1");
  const topBorderJustifytoggle = (tab) => {
    if (topBorderjustifyTab !== tab) {
      settopBorderjustifyTab(tab);
    }
  };

  //modal first
  const [showProgramModal, setShowProgramModal] = useState(false);
  function showProgram(selectedProgram) {
    setProgramId(selectedProgram.id);
    setName(selectedProgram.name);
    setDate(selectedProgram.date);
    setRequirement(selectedProgram.requirement);
    setDescription(selectedProgram.description);
    setRecommends(selectedProgram.recommends);
    setUnRecommends(selectedProgram.unrecommends);
    setCost(selectedProgram.cost);
    setPurchases(selectedProgram.purchases);
    setImageId(selectedProgram.id);
    setShowProgramModal(!showProgramModal);
  }

  //modal second
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  function purchaseProgram() {
    setShowPurchaseModal(!showPurchaseModal);
  }

  //treeview

  //data folder
  const [allCategories, setAllCategories] = useState([]);
  const data = flattenTree(allCategories);
  const ArrowIcon = ({ isOpen, className }) => {
    const baseClass = "arrow";
    const classes = cx(
      baseClass,
      { [`${baseClass}--closed`]: !isOpen },
      { [`${baseClass}--open`]: isOpen },
      className
    );

    return <IoMdArrowDropright className={classes} />;
  };

  const [expandedIds, setExpandedIds] = useState();

  function selectCategory(selectedId) {
    console.log("Selected Category ID:", selectedId);
  }

  return (
    <div className="page-content">
      {/* Top software modal */}
      {/* ---------------------------------- */}
      <Modal
        isOpen={showProgramModal}
        toggle={() => {
          showProgram();
        }}
        id="firstmodal"
        centered
      >

        <ModalBody className=" p-2">
          <CardBody>
            <Row className="d-flex ">

              <div className="col-sm-5">
                <div className="avatar-lg bg-light rounded p-1">
                  <img
                    src={downloadProgram(imageId)} alt="..." className="img-fluid d-block">
                  </img>
                </div>
              </div>
              <div className="col-sm-7">
                <br />
                <h5 className="fs-15">Name : {name}</h5>
                <h5 className="fs-15">Date : {date}</h5>
                <h5 className="fs-15">Requirement : {requirement}</h5>
              </div>

            </Row>
            <Row className="pt-3">
              <div className="col-sm-5">
                <h5 className="fs-15">
                  Description :
                </h5>
              </div>
              <div className="col-sm-7">
                <h5 className="fs-15">
                  {description}
                </h5>
              </div>
            </Row>
            <Row className="pt-3">
              <div className="col-sm-5">
                <h5 className="fs-15">
                  Recommends :
                </h5>
              </div>
              <div className="col-sm-7">
                <h5 className="fs-15">
                  {recommends}
                </h5>
              </div>
            </Row>
            <Row className="pt-3">
              <div className="col-sm-5">
                <h5 className="fs-15">
                  Cost :
                </h5>
              </div>
              <div className="col-sm-7">
                <h5 className="fs-15">
                  {cost}
                </h5>
              </div>
            </Row>
            <Row className="pt-4">
              <div className="col-sm-6 text-center">
                <Button color="light" onClick={() => { setShowProgramModal(); purchaseProgram(false); }} >Buy</Button>
              </div>
              <div className="col-sm-6 text-center">
                <Button color="primary" onClick={() => {
                  setShowProgramModal(false);
                }}>Close</Button>
              </div>
            </Row>
          </CardBody>
        </ModalBody>
      </Modal>

      {/* second Top software modal */}
      <Modal
        isOpen={showPurchaseModal}
        toggle={() => {
          purchaseProgram();
        }}
        id="secondmodal"
        centered
      >

        <div className="modal-body text-center">
          <div className=" ">
            <h4 className="mb-4">You can purchase with real or free score</h4>

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
                    <span>current: </span><p>5971.67</p>
                  </div><br /><hr />

                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>pay: </span><p>{cost}</p>
                  </div><br /><hr />

                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>real valance: </span><p>{5971.67 - cost}</p>
                  </div><br /><hr /><br />
                </div>
              </TabPane>

              <TabPane tabId="2" id="nav-border-top-home">
                <div className="d-block purchase-pro-setting mt-5">
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>current: </span><p>5971.67</p>
                  </div><br /><hr />

                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>pay: </span><p>{cost}</p>
                  </div><br /><hr />

                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>free valance: </span><p>{5971.67 - cost}</p>
                  </div><br /><hr /><br />

                </div>
              </TabPane>
            </TabContent>

            <Row className='d-flex' >
              <div className="col-sm-4">
                <Link to={"/pages-software-buySoftware/" + programId}><Button color="primary" onClick={() => {
                  console.log("programId", programId);
                  /** purchaseProgram(false); */
                  addNewBrowserHistory({ date: new Date(), count: 0, userId: 5, programId: programId })
                }}  >
                  Buy
                </Button></Link></div>
              <div className="col-sm-4">
                <Link to="/pages-profile-settings"><Button color="primary" onClick={() => { }}>
                  Charging score
                </Button></Link></div>
              <div className="col-sm-4">
                <Link to="/pages-profile-settings"><Button color="primary" onClick={() => { }} >
                  Download
                </Button></Link></div>

            </Row><br /><br />
          </div>
        </div>
      </Modal>
      {/* --------------------- */}

      <Container fluid>
        <BreadCrumb title="Software" pageTitle="Software" />

        <Row>
          <Col xl={3} lg={4}>
            <Card>
              <div className="accordion accordion-flush ">
                {/* -------------treeview---------------- */}
                <div className="card-body border-bottom">
                  <p className="text-muted text-uppercase fs-12 fw-medium mb-3 pt-3 border-bottom">
                    <i className="bi bi-hand-thumbs-up"></i>
                    Categories
                  </p>
                  <TreeView
                    data={data}
                    className="basic p-2"
                    aria-label="Controlled expanded node tree"
                    expandedIds={expandedIds}
                    defaultExpandedIds={[1]}
                    nodeRenderer={({
                      element,
                      isBranch,
                      isExpanded,
                      isDisabled,
                      getNodeProps,
                      level,
                      handleExpand,
                    }) => {
                      return (
                        <div
                          {...getNodeProps({ onClick: handleExpand })}
                          style={{
                            marginLeft: 20 * (level - 1),
                            opacity: isDisabled ? 0.5 : 1,

                          }}
                        >
                          {isBranch && <ArrowIcon isOpen={isExpanded} />}
                          <span className="name" onClick={() => {
                            // showProgram(element)
                          }}>
                            {element.name}

                            <button style={{ border: "none", backgroundColor: "lightblue", width: "40px", height: "19px", borderRadius: "8px" }} onClick={() => {
                              console.log(originalCategoryList);
                              let selectedCategory = originalCategoryList.find(category => {
                                return category.title == element.name;
                              })
                              setSelectedCategoryId(selectedCategory.id);
                            }} className="">  <i className="las la-angle-right fs-12" ></i>
                            </button></span>
                        </div>
                      );
                    }}
                  />
                </div>

                {/* -------------Top software------------ */}
                <div className="card-body border-bottom">
                  <p className="text-muted text-uppercase fs-12 fw-medium mb-3 pt-3 border-bottom">
                    Top Software
                  </p>

                  <div className="p-3">{TopsoftwareData.map((softwareItem, key) => (
                    <React.Fragment key={softwareItem.id}>
                      <Card className="product" onClick={() => showProgram(softwareItem)}>
                        <Link to='#'
                          className="text-dark"
                        >
                          <CardBody>
                            <div className="d-flex align-items-center text-muted  ">
                              <div className="flex-shrink-0 me-3">
                                <img src={downloadProgram(softwareItem.id)} className="avatar-xxs rounded-circle shadow bg-light" alt="..."></img>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="fs-14">{softwareItem.name}</h5>
                                <h5 className="fs-14">purchases:{softwareItem.purchases}</h5>
                              </div>
                            </div>
                          </CardBody>
                        </Link>
                      </Card>
                    </React.Fragment>
                  ))}
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <div className="col-xl-9 col-lg-8">
            <div className="card">
              {/* --------------------search... --------------------- */}
              <CardHeader >
                <Row>
                  <div className="col-sm-6"></div>

                  <div className="col-sm-6">
                    <div className="filter-choices-input">
                      <Input placeholder={"Search..."} />
                    </div>
                  </div>
                </Row>
              </CardHeader>

              {/* -----------------main table display------------------ */}
              <Row className="p-3">
                {softwareData.map((software, key) => (
                  <Col lg={4} key={software.id}>
                    <Card className="product" onClick={() => showProgram(software)}>
                      <Link to='#'
                        className="text-dark"
                      >
                        <CardBody>
                          <Row className="gy-3">
                            <div className="col-sm-6">
                              <div className="avatar-lg bg-light rounded p-1">
                                <img
                                  // src={software.file}
                                  src={downloadProgram(software.id)}
                                  alt=""
                                  className="img-fluid d-block"
                                />{console.log("VVVVVV", downloadProgram(software.id))}
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <h5 className="pt-4 fs-20 text-truncate">

                                {software.name}
                              </h5>
                            </div>
                          </Row>
                        </CardBody>

                        <div className="card-footer">
                          <div className="row align-items-center gy-3">
                            <div className="col-sm-6">
                              <div className="d-flex align-items-center gap-2 text-muted">
                                <div>Cost:</div>
                                <h5 className="fs-12 mb-0">
                                  <span className="product-line-price">
                                    {" "}

                                    {software.cost}
                                  </span>
                                </h5>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="d-flex align-items-center gap-2 text-muted">
                                <div>UpVote:</div>
                                <h5 className="fs-12 mb-0">
                                  <span className="product-line-price">
                                    {" "}
                                    {software.recommends}
                                  </span>
                                </h5>
                              </div>
                              <div className="d-flex align-items-center gap-2 text-muted">
                                <div>DownVote:</div>
                                <h5 className="fs-12 mb-0">
                                  <span className="product-line-price">
                                    {" "}
                                    {software.unrecommends}
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Software;











