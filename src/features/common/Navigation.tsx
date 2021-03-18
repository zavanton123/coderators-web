import React, {useState} from 'react';
import {
  Collapse,
  Container,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";
import {Link} from 'react-router-dom';
import styled from 'styled-components'

// styled component extends some existing component
const CustomNavbar = styled(Navbar)`
  background-color: blueviolet;
`;

// adding attributes (e.g. class name) to styled component
const SearchField = styled.input.attrs(props => ({
  className: "form-control mr-sm-2",
  placeholder: "search",
  type: "search"
}))``;

const SearchButton = styled.button.attrs(props => ({
  className: "btn btn-outline-light ",
  type: "submit",

}))``;

const CustomNavLink = styled(Link).attrs(props => ({
  className: 'nav-link'
}))``;

const CustomDropDownItem = styled(Link).attrs(props => ({
  className: "dropdown-item"
}))``;

interface CustomNavItemProps {
  to: string;
  title: string;
}

const CustomNavItem = (props: CustomNavItemProps) => {
  return <NavItem>
    <CustomNavLink to={props.to}>{props.title}</CustomNavLink>
  </NavItem>
}

export const Navigation = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const onSearchClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`zavanton - search clicked: ${searchTerm}`);
    setSearchTerm('');
  }

  const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <CustomNavbar dark expand="md">
        <Container>
          <Link className="navbar-brand" to="/">Coderators</Link>
          <NavbarToggler/>
          <Collapse isOpen navbar>
            <Nav className="mr-auto" navbar>
              <CustomNavItem to="/categories/" title="Categories"/>
              <CustomNavItem to="/tags/" title="Tags"/>
              <CustomNavItem to="/feedback/" title="Feedback"/>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Login
                </DropdownToggle>
                <DropdownMenu right>
                  <CustomDropDownItem to="/login">Login</CustomDropDownItem>
                  <CustomDropDownItem to="/register">Register</CustomDropDownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>

          <form className="form-inline" onSubmit={onSearchClick}>
            <SearchField
              value={searchTerm}
              onChange={onSearchTermChange}
              aria-label="Search"/>
            <SearchButton>Search</SearchButton>
          </form>

        </Container>
      </CustomNavbar>
    </div>
  );
};
