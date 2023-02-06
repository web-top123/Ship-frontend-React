import React, { useState, useEffect } from "react";
import { Collapse, Container, NavbarToggler, NavLink } from "reactstrap";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, NavItem,  Row, TabContent, TabPane, UncontrolledButtonDropdown, UncontrolledDropdown, } from 'reactstrap';

// Import Images
import logodark from "../../../assets/images/logo-dark.png";
import logolight from "../../../assets/images/logo-light.png";

const Navbar = () => {
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [navClass, setnavClass] = useState("");

    const toggle = () => setisOpenMenu(!isOpenMenu);

    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });

    function scrollNavigation() {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            setnavClass("is-sticky");
        } else {
            setnavClass("");
        }
    }

    return (
        <React.Fragment>
            <nav className={"navbar navbar-expand-lg navbar-landing fixed-top " + navClass} id="navbar">
                <Container>
                    <Link className="navbar-brand" to="/index">
                        <img src={logodark} className="card-logo card-logo-dark" alt="logo dark" height="17" />
                        <img src={logolight} className="card-logo card-logo-light" alt="logo light" height="17" />
                    </Link>

                    <NavbarToggler className="navbar-toggler py-0 fs-20 text-body" onClick={toggle} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </NavbarToggler>

                    <Collapse
                        isOpen={isOpenMenu}
                        className="navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <Scrollspy
                            offset={-18}
                            items={[
                                "hero",
                                "services",
                                "features",
                                "plans",
                                "reviews",
                                "team",
                                "contact",
                            ]}
                            currentClassName="active"
                            className="navbar-nav mx-auto mt-2 mt-lg-0"
                            id="navbar-example"
                        >
                            <li className="nav-item">
                                <NavLink className="fs-14" href="#home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-14" href="#data_service">Data Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-14" href="#question_service">Question Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-14" href="#software">Software</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-14" href="#study_field">Study Field</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-14" href="#test_field">Test Field</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-14" href="#my_page">My Page</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-14" href="#contact">Contact Us</NavLink>
                            </li>
                       
                            
                        </Scrollspy>

                        <div className="">
                            <Link to="/login" className="btn btn-link fw-medium text-decoration-none text-dark">Sign
                                in</Link>{" "}
                            <Link to="/register" className="btn btn-primary">Sign Up</Link>
                        </div>
                    </Collapse>
                </Container>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;