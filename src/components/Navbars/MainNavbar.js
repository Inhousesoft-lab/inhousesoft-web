import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  NavbarBrand,
  Navbar,
  Container,
} from "reactstrap";

class MainNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container className="d-flex justify-content-between">
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <h2 className="text-white">
                  LYNLAB
                </h2>
              </NavbarBrand>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="mailto:lynlab@lynlab.kr"
                target="_blank"
                style={{ height: '43px' }}
              >
                <span className="nav-link-inner--text ml-1">
                  문의하기
                </span>
              </Button>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default MainNavbar;
