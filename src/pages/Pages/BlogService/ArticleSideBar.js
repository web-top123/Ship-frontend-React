import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Card, CardBody, TabContent, Nav, NavItem, NavLink, CardHeader, TabPane, Button, Modal, ModalHeader, Label, Input, Form } from "reactstrap";
import { getArticleCategories, getArticleFindTopUser } from "../../../helpers/fakebackend_helper";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import { Link } from 'react-router-dom';
import "quill/dist/quill.snow.css";


const ArticleSideBar = () => {
    document.title = "Blog Service";
    const [articleCategories, setArticleCategories] = useState([]);
    const [articleTopWriter, setArticleTopWriter] = useState([]);

    useEffect(() => {
        getArticleCategories().then(categories => {
            console.log("Article Categories:", categories);
            setArticleCategories(categories);
        });
        getArticleFindTopUser().then(topUser => {
            console.log("top user;", topUser);
            setArticleTopWriter(topUser);
        });
    }, []);

    const [modal_large, setmodal_large] = useState(false);
    function tog_large() {
        setmodal_large(!modal_large);
    }

    const sort = [
        {
            options: [
                { label: "Engineering", value: "Engineering" },
                { label: "Math", value: "Math" },
            ],
        },
    ];
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h4 className='mb-sm-0'>Related Topics</h4>
                    <div className="realted-topic d-flex flex-wrap">
                        {articleCategories.map((articleCategory, key) => (
                            <React.Fragment key={articleCategory.id}>
                                <Link className="rounded-pill btn btn-light tags me-4" to={'/pages-blog-service/article-kind/' + articleCategory.id}>{articleCategory.title}</Link>
                            </React.Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
            <Card  className='my-5 pb-4'>
                <CardBody>
                    <h4 className='mb-sm-0 pb-4'>Top Writers</h4>
                    <div className="top-writers d-flex align-items-center pt-4">
                        <div className='d-flex me-2'>
                            <div className='me-2'>
                                <img style={{ "width": "32px", "height": "auto", "borderRadius": "50%" }} src={avatar1} />
                            </div>
                            <div>
                                {articleTopWriter.map((findTopWriter, key) => (
                                    <React.Fragment key={key}>
                                        <Link className="rounded-pill btn btn-light tags me-4" to={'/pages-blog-service/detail/' + findTopWriter.id}>{findTopWriter.userId}</Link>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default ArticleSideBar;