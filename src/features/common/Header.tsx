import React from 'react';
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarText,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const CustomNavbar = styled(Navbar)`
  background-color: blueviolet;
`;

export const NavigationHeader = () => {
  return (
    <div>
      <CustomNavbar dark expand="md">
        <Container>
          <Link className="navbar-brand" to="/">Coderators</Link>
          <NavbarToggler/>
          <Collapse isOpen navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/categories/">Categories</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/tags/">Tags</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/feedback/">Feedback</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Login
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Login
                  </DropdownItem>
                  <DropdownItem>
                    Register
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Container>
      </CustomNavbar>
    </div>
  );
};
