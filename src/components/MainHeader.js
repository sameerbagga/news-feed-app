import React from 'react';
import { Navbar, Button, NavItem, NavbarBrand, Nav } from 'reactstrap';


const MainHeader = props => (
  <Navbar color="info" dark expand>
    <NavbarBrand color = "black"> <b> News App </b> </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Button size="sm" color="danger" onClick={props.refresh}>
            Refresh
          </Button>
        </NavItem>
      </Nav>
  </Navbar>
);

export default MainHeader;
